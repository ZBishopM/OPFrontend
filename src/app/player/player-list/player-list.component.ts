import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerCreateComponent } from '../player-create/player-create.component';
import { MatDialog } from '@angular/material';
import { MatSort} from '@angular/material/sort';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'gamePreferences', 'team'];
  dataSource = []

  constructor(public dialog:MatDialog,private playerService:PlayerService) { }


  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
      this.playerService.getPlayers().subscribe(data=>{this.dataSource = data})
  }
  
  openCreate(){
    const dialog = this.dialog.open(PlayerCreateComponent,{
      width:'700px',
      data: {}
    })
    dialog.afterClosed().subscribe(result=>{
      //alert(`User chose ${result}`)
    })
  }

}
