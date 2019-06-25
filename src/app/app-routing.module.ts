import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'player',
    loadChildren:'./player/player.module#PlayerModule'
},
{
    path: 'team',
    loadChildren:'./team/team.module#TeamModule'
},
{
    path: 'tournament',
    loadChildren:'./tournament/tournament.module#TournamentModule'
},
{
  path: 'statistics',
  loadChildren:'./statistics/statistics.module#StatisticsModule'
},
{
  path: 'match',
  loadChildren:'./match/match.module#MatchModule'
},
{
    path:'',
    redirectTo: '',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }