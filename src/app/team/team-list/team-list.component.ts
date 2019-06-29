import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { TeamCreateComponent } from '../team-create/team-create.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MatSort} from '@angular/material/sort';
import { TeamService } from '../team.service';
import { Team } from 'src/app/class/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  displayedColumns: string[] = ['position','name', 'nmembers', 'tournament','edit'];
  dataSource:any = []

  constructor(public dialog:MatDialog,private teamService:TeamService) { }


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Output() object = new EventEmitter<any>()

  ngOnInit() {
    this.listData()
  }
  listData() {
    this.teamService.getTeams().subscribe(data=>{this.dataSource = new MatTableDataSource(data)})
  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openCreate(){
    const dialog = this.dialog.open(TeamCreateComponent,{
      width:'700px',
      data: null
    })
    dialog.afterClosed().subscribe(result=>{
      console.log(result)
      this.listData()
    })
  }
  editTeam(elem){
    const dialog = this.dialog.open(TeamCreateComponent,{
      width:'700px',
      data: elem
    })
    dialog.afterClosed().subscribe(result=>{
      console.log(result)
      this.listData()
    })
  }
}
