import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerCreateComponent } from '../player-create/player-create.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MatSort} from '@angular/material/sort';
import { PlayerService } from '../player.service';
import { Player } from 'src/app/class/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'gamePreferences', 'team','edit'];
  dataSource:any = []

  constructor(public dialog:MatDialog,private playerService:PlayerService) { }


  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
      this.listData()
  }
  listData(){
    this.playerService.getPlayers().subscribe(data=>{this.dataSource = new MatTableDataSource(data)})
  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openCreate(){
    const dialog = this.dialog.open(PlayerCreateComponent,{
      width:'700px',
      data: {}
    })
    dialog.afterClosed().subscribe(result=>{
      console.log(result)
      this.listData()
    })
  }

}
