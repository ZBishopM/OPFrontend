import { Component, OnInit, ViewChild } from '@angular/core';
import { MatchService } from '../match.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  displayedColumns: string[] = ['Fase', 'Winner' ,'Team1', 'Team2', 'Tournament'];
  dataSource:any = []
  Title = "Match"
  constructor(private router:Router,private matchService:MatchService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.listData()
  }
  listData(){
    this.matchService.getMatchs().subscribe(data=>{this.dataSource = new MatTableDataSource(data)})
    //console.log(this.dataSource)
  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onSelect(element){
    this.router.navigate(['/statistics/match/',element.id])
  }
}
