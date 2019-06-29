import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
//import { StatisticsCreateComponent } from '../statistics-create/statistics-create.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MatSort} from '@angular/material/sort';
import { StatisticsService } from '../statistics.service';
import { Statistics } from 'src/app/class/statistics';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.css']
})
export class StatisticsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'player','match','team', 'damage', 'assists','kills','deaths'];
  dataSource:any = []

  constructor(public dialog:MatDialog,private statisticsService:StatisticsService) { }


  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
    this.listData()
  }
  listData(){
    this.statisticsService.getStatistics().subscribe(data=>{this.dataSource = new MatTableDataSource(data)})
  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
