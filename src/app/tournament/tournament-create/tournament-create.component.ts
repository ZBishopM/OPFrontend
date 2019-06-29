import { Component, OnInit, Inject } from '@angular/core';
import{FormControl,Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { TournamentService } from '../tournament.service';
import { PlayerService } from 'src/app/player/player.service';
import { ModeService } from 'src/app/mode/mode.service';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit {
  emailFormControl: FormControl;
  name: string = '';
  Ename : string = '';
  Egame: string = '';
  game:string = '';
  Id: number =0;
  nteams: number = 0;
  Enteams:number = 0;
  date: Date ;
  Edate:Date;
  playerId:null;
  Players:any[];
  Title='New Tournament'
  modeId=null;
  Modes:any=[]

  constructor(public dialog:MatDialog,private tournamentService:TournamentService,
    @Inject(MAT_DIALOG_DATA) public data: any,private modeService: ModeService ) { }

  ngOnInit() {
    this.emailFormControl=new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    console.log(this.data)
    if(this.data!=undefined){
      this.name=this.data.name
      this.game=this.data.game
      this.nteams=this.data.nteams
      this.date=this.data.date
      this.modeId=this.data.mode ? this.data.mode.id : null;
      this.Title='Update Tournament'
    }
    this.modeService.getModes().subscribe(data=>{
      console.log("data",data)
      this.Modes = data;
    })
  }

  openRepDialong(){
    const dialog = this.dialog.open(RepDialogComponent,{
      width:'250px',
      data:{}
    })
    dialog.afterClosed().subscribe(result=>{

    })
  }
  save(){
    console.log(this.modeId)
    console.log(this.name)
    console.log(this.game)
    console.log(this.date)
    console.log(this.nteams)

    let obj:any ={}
    obj.name=this.name
    obj.game=this.game
    obj.date=this.date
    obj.nteams=this.nteams
    let modeT:any ={}
    modeT.id=this.modeId
    obj.mode=modeT
    this.tournamentService.postTournament(obj).subscribe(data=>{
      console.log(data)
    })
    
  }
  update(){
    let obj: any={}
    obj.name=this.name
    obj.id=this.Id
    obj.game=this.game
    let modeT:any={}
    modeT.id=this.modeId
    obj.mode=modeT
    this.tournamentService.putTournament(obj).subscribe(data=>{
      console.log(data)
    })
    
  }
}
