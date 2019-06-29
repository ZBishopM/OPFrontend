import { Component, OnInit, Inject } from '@angular/core';
import { FormControl,Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import {MAT_DIALOG_DATA} from '@angular/material';
import { TeamService } from '../team.service';
import { TournamentService } from 'src/app/tournament/tournament.service';


@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
  emailFormControl: FormControl;
  Id: number = 0;
  name: string = '';
  Ename : string = '';
  Title = 'New Team'
  tournamentId =null;
  Tournaments:any=[]
  constructor(public dialog:MatDialog , private teamService:TeamService,
    @Inject(MAT_DIALOG_DATA) public data: any, private tournamentService:TournamentService) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    console.log(this.data)
    if(this.data!=undefined) {
      this.name = this.data.name
      this.Id = this.data.id
      this.Title = 'Update Tournament'
      this.tournamentId = this.data.tournament ? this.data.tournament.id : null;
    }
    this.tournamentService.getTournaments().subscribe(data=>{
      console.log("data",data)
      this.Tournaments = data;
    }
    )
  }
  openRepDialong(){
    const dialog = this.dialog.open(RepDialogComponent,{
      width:'250px',
      data: {}
    })
    dialog.afterClosed().subscribe(result=>{
      //alert(`User chose ${result}`)
    })

  }

  save(){
    console.log(this.tournamentId)
    console.log(this.name)
    let obj:any = {}
    obj.name = this.name
    let tournamentT:any ={}
    tournamentT.id = this.tournamentId
    obj.tournament = tournamentT
    this.teamService.postTeam(obj).subscribe(data=>{
      console.log(data)
    })
  }

  update(){
    let obj:any = {}
    obj.name = this.name
    obj.id = this.Id
    let tournamentT:any = {}
    tournamentT.id = this.tournamentId
    obj.tournament = tournamentT
    this.tournamentService.putTournament(obj).subscribe(data=>{
      console.log(data)
    })
  }

}
