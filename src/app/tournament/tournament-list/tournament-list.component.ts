import { Component, OnInit, ViewChild, Output,EventEmitter } from '@angular/core';
import {TournamentDetailComponent} from '../tournament-detail/tournament-detail.component';
import {TournamentCreateComponent} from '../tournament-create/tournament-create.component';
import {MatDialog,MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {TournamentService} from '../tournament.service';
import {Tournament} from 'src/app/class/tournament';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatchService } from 'src/app/match/match.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  displayedColumns: string[]=['position','name','Game','Date','Winner','playerId','nTeams','modeId','edit','generate'];
  dataSource:any=[]
  //departments =[{"id":1,"name":"Hola"}]

  constructor(private router: Router, public dialog:MatDialog,private tournamentService:TournamentService,
    private matchService:MatchService,
    private toastService:ToastrService) { }

  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @Output() object = new EventEmitter<any>()



  ngOnInit() {
    this.listData()
  }
  listData(){
    let thisData:any = [];
    this.tournamentService.getTournaments().subscribe(data=>{
      for (let i = 0; i < data.length; i++) {
        //console.log(new Date(data[i].date))
        let datee = new Date(data[i].date)
        datee.setDate(datee.getDate()+1)
        data[i].date = this.dateFormat(new Date(datee))
        console.log(data[i].date)
      }
      this.dataSource= new MatTableDataSource(data);})
    //console.log(thisData)
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
    console.log(element.id);
    this.router.navigate(['/match/',element.id]);
    //this.router.navigate(['tournament/',element.id]);
  }
  Generate(element){
    console.log("hola funciono xd")
    this.tournamentService.generateTournament(element).subscribe(data=>{
      console.log("data",data)
      let res:any = data
      this.listData()
      if(res==true) this.toastService.success('Data generated', 'Success!');
      if(res==false) this.toastService.error('Validation error', 'Oops!');
      if(res!=true&&res!=false)this.toastService.error('ERROR', 'Oops!');
      this.listData();
    }
    );
  }
}
