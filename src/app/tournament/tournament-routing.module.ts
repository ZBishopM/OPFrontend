import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TournamentListComponent} from './tournament-list/tournament-list.component';
import {TournamentCreateComponent} from './tournament-create/tournament-create.component'
import { TournamentEditComponent } from './tournament-edit/tournament-edit.component';
import { TournamentDetailComponent } from './tournament-detail/tournament-detail.component';

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
    path:":id",component: TournamentDetailComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  declarations:[],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }
