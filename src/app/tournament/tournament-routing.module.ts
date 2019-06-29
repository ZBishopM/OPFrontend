import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TournamentListComponent} from './tournament-list/tournament-list.component';
import {TournamentCreateComponent} from './tournament-create/tournament-create.component'
import { TournamentEditComponent } from './tournament-edit/tournament-edit.component';

const routes: Routes = [
  {
    path:'',
    component: TournamentListComponent
  },
  {
    path:'new',
    component:TournamentCreateComponent
  },
  {
    path:"example/:example",component: TournamentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }
