import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { StatisticsService } from '../statistics.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics-match',
  templateUrl: './statistics-match.component.html',
  styleUrls: ['./statistics-match.component.css']
})
export class StatisticsMatchComponent implements OnInit {
  displayedColumns: string[] = ['id', 'player','match','team', 'damage', 'assists','kills','deaths'];
  dataSource:any = []
  id = 0;
  constructor(private router: Router,public dialog:MatDialog,private statisticsService:StatisticsService,private route: ActivatedRoute) { }


  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {

    let idT = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(idT);
    this.id = idT
    this.listData()
  }
  listData(){
    this.statisticsService.getStatisticsMatch(this.id).subscribe(data=>{this.dataSource = new MatTableDataSource(data)})
  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onSelect(element){
    console.log(element.player.id)
    this.router.navigate(['statistics/player/',element.player.id]);
  }
}
