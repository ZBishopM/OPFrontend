import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { StatisticsService } from '../statistics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statistics-player',
  templateUrl: './statistics-player.component.html',
  styleUrls: ['./statistics-player.component.css']
})
export class StatisticsPlayerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'player','match','team', 'damage', 'assists','kills','deaths'];
  dataSource:any = []
  id=0;
  Title=' '
  constructor(public dialog:MatDialog,private statisticsService:StatisticsService,private route: ActivatedRoute) { }


  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {

    let idT = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(idT);
    this.id = idT
    this.listData()
  }
  listData(){
    let templayer:any = {}
    this.statisticsService.getStatisticsPlayer(this.id).subscribe(data=>{templayer=data;this.Title='Statistics by '+ templayer[0].player.name;this.dataSource = new MatTableDataSource(data)})
    
  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
