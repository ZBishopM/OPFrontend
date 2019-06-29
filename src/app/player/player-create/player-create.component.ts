import { Component, OnInit, Inject } from '@angular/core';
import { FormControl,Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { PlayerService } from '../player.service';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  emailFormControl: FormControl;
  name: string = '';
  Ename : string = '';
  EgamePreference: string = '';
  gamePreference:string = '';
  Title = 'New Player'
  constructor(public dialog:MatDialog , private playerService:PlayerService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    console.log(this.data)
    if(this.data!=undefined) {
      this.name = this.data.name
      this.gamePreference = this.data.gamePreferences
      this.Title = 'Update Player'
    }
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
    console.log(this.name)
    console.log(this.gamePreference)
    let obj:any = {}
    obj.name = this.name
    obj.gamePreferences = this.gamePreference
    this.playerService.postPlayer(obj).subscribe(data=>{
      console.log(data)
    })
  }
  update(){
    console.log("gg")
  }
}
