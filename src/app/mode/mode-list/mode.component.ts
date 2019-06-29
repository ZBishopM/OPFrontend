import { Component, OnInit, ViewChild, Output,EventEmitter } from '@angular/core';
import {MatDialog,MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {ModeService} from '../mode.service';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {
  displayedColumns: string[]=['position','format'];
  dataSource:any=[]
  constructor(public dialog:MatDialog,private modeService:ModeService) { }
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @Output() object = new EventEmitter<any>()


  ngOnInit() {
    this.listData()
  }
  listData(){
    this.modeService.getModes().subscribe(data=>{this.dataSource
    =new MatTableDataSource(data)})
  }

}
