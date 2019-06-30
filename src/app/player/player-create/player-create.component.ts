import { Component, OnInit, Inject } from '@angular/core';
import { FormControl,Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { PlayerService } from '../player.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import { TeamService } from 'src/app/team/team.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  emailFormControl: FormControl;
  name: string = '';
  Ename : string = '';
  Id: number = 0;
  EgamePreference: string = '';
  gamePreference:string = '';
  Title = 'New Player'
  teamId =null;
  Teams:any=[]

  constructor(public dialog:MatDialog , private playerService:PlayerService,
    @Inject(MAT_DIALOG_DATA) public data: any, private teamService:TeamService,
    private toastService:ToastrService) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    console.log(this.data)
    if(this.data!=undefined) {
      this.name = this.data.name
      this.gamePreference = this.data.gamePreferences
      this.Id = this.data.id
      this.Title = 'Update Player'
      this.teamId = this.data.team ? this.data.team.id : null;
    }
    this.teamService.getTeams().subscribe(data=>{
      console.log("data",data)
      this.Teams = data;
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
    console.log(this.teamId)
    console.log(this.name)
    console.log(this.gamePreference)
    let obj:any = {}
    obj.name = this.name
    obj.gamePreferences = this.gamePreference
    let teamT:any = {}
    teamT.id = this.teamId
    obj.team = teamT
    this.playerService.postPlayer(obj).subscribe(data=>{
      let res:any = data
      if(res==true) this.toastService.success('You are awesome!', 'Success!');
      if(res==false) this.toastService.error('This is not good!', 'Oops!');
      if(res!=true&&res!=false)this.toastService.error('OOF', 'Oops!');
    },err=>{
      console.log("err", err)
      this.toastService.error('OOF', `${err.error.mensaje}`);
    })
  }
  update(){
    let obj:any = {}
    obj.name = this.name
    obj.id = this.Id
    obj.gamePreferences = this.gamePreference
    let teamT:any = {}
    teamT.id = this.teamId
    obj.team = teamT
    if(this.teamId==null) delete obj.team
    console.log("obj", obj)
    this.playerService.putPlayer(obj).subscribe(data=>{
      console.log(data)
      let res:any = data
      if(res==true) this.toastService.success('You are awesome!', 'Success!');
      if(res==false) this.toastService.error('This is not good!', 'Oops!');
      if(res!=true&&res!=false)this.toastService.error('OOF', 'Oops!');
    },err=>{
      console.log("err", err)
      this.toastService.error('Error de sistema', `${err.error.mensaje}`);
    })
  }
}
