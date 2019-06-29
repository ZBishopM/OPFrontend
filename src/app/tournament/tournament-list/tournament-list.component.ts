import { Component, OnInit, ViewChild } from '@angular/core';
import {TournamentCreateComponent} from '../tournament-create/tournament-create.component';
import {MatDialog,MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {TournamentService} from '../tournament.service';
import {Tournament} from 'src/app/class/tournament';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  displayedColumns: string[]=['position','name','Game','Date','Winner','playerId','nTeams','modeId','edit'];
  dataSource:any=[]
  constructor(public dialog:MatDialog,private tournamentService:TournamentService) { }

  @ViewChild(MatSort,{static: true}) sort: MatSort;




  ngOnInit() {
    this.listData()
  }
  listData(){
    this.tournamentService.getTournaments().subscribe(data=>{this.dataSource=new MatTableDataSource(data)})
  }
  applyfilter(filterValue:string){
    console.log(filterValue)
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  openCreate(){
    const dialog = this.dialog.open(TournamentCreateComponent,{
      width:'700px',
      data:{}
    })
    dialog.afterClosed().subscribe(result=>{
      console.log(result)
      this.listData()
    })
  }
}
