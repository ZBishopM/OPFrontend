import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
  emailFormControl: FormControl;
  name: string = '';
  Ename : string = '';
  Enmembers: string = '';
  nmembers:string = '';
  constructor(public dialog:MatDialog , private teamService:TeamService) { }

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
    console.log(this.nmembers)
    let obj:any = {}
    obj.name = this.name
    obj.nmembers = this.nmembers
    this.teamService.postTeam(obj).subscribe(data=>{
      console.log(data)
    })
  }

}
