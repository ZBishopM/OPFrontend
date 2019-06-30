import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-tournament-detail',
  template: `
    <p>
        Hi
    </p>
  `,
  styles: []
})
export class TournamentDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
  }

}
