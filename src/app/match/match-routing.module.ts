import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchTournamentComponent } from './match-tournament/match-tournament.component';

const routes: Routes = [
{
  path:'',
  component:MatchListComponent
},
{
  path: ':id', component: MatchTournamentComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations:[],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
