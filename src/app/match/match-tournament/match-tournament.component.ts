import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatchService } from '../match.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-match-tournament',
  templateUrl: './match-tournament.component.html',
  styleUrls: ['./match-tournament.component.css']
})
export class MatchTournamentComponent implements OnInit {

  displayedColumns: string[] = ['Fase', 'Winner' ,'Team1', 'Team2', 'Tournament'];
  dataSource:any = []
  Title = "Match Tournament"
  id = 0;
  constructor(private matchService:MatchService,private route: ActivatedRoute) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    
    let idT = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(idT);
    this.id = idT
    this.listData()
  }
  listData(){
    this.matchService.getMatchsTournament(this.id).subscribe(data=>{this.dataSource = new MatTableDataSource(data)})
    //console.log(this.dataSource)
  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
