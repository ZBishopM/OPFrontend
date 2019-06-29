import { Component, OnInit, ViewChild, Output,EventEmitter } from '@angular/core';
import {TournamentDetailComponent} from '../tournament-detail/tournament-detail.component';
import {TournamentCreateComponent} from '../tournament-create/tournament-create.component';
import {MatDialog,MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {TournamentService} from '../tournament.service';
import {Tournament} from 'src/app/class/tournament';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  displayedColumns: string[]=['position','name','Game','Date','Winner','playerId','nTeams','modeId','edit'];
  dataSource:any=[]
  //departments =[{"id":1,"name":"Hola"}]

  constructor(private router: Router, public dialog:MatDialog,private tournamentService:TournamentService) { }

  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @Output() object = new EventEmitter<any>()



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
      data:null
    })
    dialog.afterClosed().subscribe(result=>{
      console.log(result)
      this.listData()
    })
  }
  editTournament(elem){
    const dialog = this.dialog.open(TournamentCreateComponent,{
      width:'700px',
      data:elem
    })
    dialog.afterClosed().subscribe(result=>{
      console.log(result)
      this.listData()
    })
  }
  onSelect(element){
    this.router.navigate(['/tournament',element.id]);
  }
}
