import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TournamentListComponent} from './tournament-list/tournament-list.component';
import {TournamentCreateComponent} from './tournament-create/tournament-create.component'

const routes: Routes = [
  {
    path:'',
    component: TournamentListComponent
  },
  {
    path:'new',
    component:TournamentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }
