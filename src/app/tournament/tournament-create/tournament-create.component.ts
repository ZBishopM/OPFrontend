import { Component, OnInit, Inject } from '@angular/core';
import { FormControl,Validators} from '@angular/forms';
import { MatDialog, MatDialogRef} from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { TournamentService } from '../tournament.service';
import { PlayerService } from 'src/app/player/player.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import { ModeService } from 'src/app/mode/mode.service';
//Import core module
import {  ViewContainerRef } from '@angular/core';
//Import ToastsManager
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit {
  emailFormControl: FormControl;
  winner: string = ''
  name: string = '';
  Ename : string = '';
  Egame: string = '';
  game:string = '';
  Id: number =0;
  nteams: number = 0;
  Enteams:number = 0;
  date: Date ;
  Edate:Date;
  Title='New Tournament'
  modeId=null;
  Modes:any=[]
  playerId:null = null;
  Players:any=[];
  minDate:Date = new Date();
  constructor(public dialog:MatDialog,private tournamentService:TournamentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modeService: ModeService,private playerService:PlayerService,
    private toastService:ToastrService)
    // public toastr: ToastsManager, vcr: ViewContainerRef ) { 
      {
      // this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.emailFormControl=new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    this.minDate.setDate(this.minDate.getDate() + 1)
    // console.log(this.dateFormat(this.minDate))
    console.log(this.data)
    if(this.data!=undefined){
      this.Id=this.data.id
      this.name=this.data.name
      this.game=this.data.game
      this.winner=this.data.winner
      this.nteams=this.data.nteams
      let datee = new Date(this.data.date)
      datee.setDate(datee.getDate()+1)
      this.date=datee 
      console.log(this.date)
      this.modeId=this.data.mode ? this.data.mode.id : null;
      this.playerId=this.data.player ? this.data.player.id : null;
      this.Title='Update Tournament'
    }
    this.modeService.getModes().subscribe(data=>{
      console.log("data",data)
      this.Modes = data;
    })
    this.playerService.getPlayers().subscribe(data=>{
      console.log("data",data)
      this.Players=data;
    })
  }
  dateFormat (now) {
    // now = new Date();
    let year = "" + now.getFullYear();
    let month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    let day = "" + (now.getDate()); if (day.length == 1) { day = "0" + day; }
    let hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    let minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    let second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return year + "-" + month + "-" + day;
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
    console.log(this.playerId)
    console.log(this.name)
    console.log(this.game)
    console.log(this.date)
    
    // console.log()
    let obj:any ={}
    obj.name=this.name
    obj.game=this.game
    obj.date=this.dateFormat(this.date)
    let modeT:any ={}
    let playerT:any={}
    modeT.id=this.modeId
    obj.mode=modeT
    playerT.id=this.playerId
    obj.player=playerT
    
    this.tournamentService.postTournament(obj).subscribe(data=>{
      let res:any = data
      console.log("res",data)
      if(res==true) this.toastService.success('You are awesome!', 'Success!');
      if(res==false) this.toastService.error('This is not good!', 'Oops!');
      
    },err=>{
      console.log("err", err)
      this.toastService.error('OOF', `${err.error.mensaje}`);
    })
    
  }
  update(){
    let obj: any={}
    obj.date=this.dateFormat(this.date)
    console.log("date",obj.date);
    obj.name=this.name
    obj.id=this.Id
    obj.game=this.game
    obj.nteams=this.nteams
    obj.winner=this.winner
    let modeT:any={}
    let playerT:any={}
    modeT.id=this.modeId
    obj.mode=modeT  
    playerT.id=this.playerId
    obj.player=playerT
    this.tournamentService.putTournament(obj).subscribe(data=>{
      console.log(data)
      let res:any = data
      if(res==true) this.toastService.success('You are awesome!', 'Success!');
      if(res==false) this.toastService.error('This is not good!', 'Oops!');
      if(res!=true&&res!=false)this.toastService.error('OOF', 'Oops!');
    })
    
  }
}
