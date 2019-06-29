import { Component, OnInit, ViewChild } from '@angular/core';
import { MatchService } from '../match.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  displayedColumns: string[] = ['Fase', 'Winner' ,'Team 1', 'Team 2', 'Tournament'];
  dataSource:any = []
  constructor(private matchService:MatchService) { }

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
}
