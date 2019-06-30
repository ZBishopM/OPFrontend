import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tournament-edit',
  templateUrl: './tournament-edit.component.html',
  styleUrls: ['./tournament-edit.component.css']
})
export class TournamentEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.example = this.route.snapshot.paramMap.get("example")
  }

}
