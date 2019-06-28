import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { PlayerService } from '../player.service';


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
  constructor(public dialog:MatDialog , private playerService:PlayerService) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
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
    obj.gamePreference = this.gamePreference
    this.playerService.postPlayer(obj).subscribe(data=>{
      console.log(data)
    })
  }

}
