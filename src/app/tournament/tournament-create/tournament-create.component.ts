import { Component, OnInit } from '@angular/core';
import{FormControl,Validators} from '@angular/forms';
import { MatDialog, MatDialogRef } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { TournamentService } from '../tournament.service';
import { Player } from 'src/app/class/player';
import { Mode } from 'src/app/class/mode';

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
  nteams: number = 0;
  Enteams:number = 0;
  date: Date ;
  Edate:Date;
  player:Player;
  Eplayer:Player;
  mode:Mode;
  Emode:Mode;

  constructor(public dialog:MatDialog,private tournamentService:TournamentService) { }

  ngOnInit() {
    this.emailFormControl=new FormControl('',[
      Validators.required,
      Validators.email
    ])
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
    console.log(this.name)
    console.log(this.game)
    console.log(this.date)
    console.log(this.nteams)

    let obj:any ={}
    obj.name=this.name
    obj.game=this.game
    obj.date=this.date
    this.tournamentService.postTournament(obj).subscribe(data=>{
      console.log(data)
    })
    
  }
}
