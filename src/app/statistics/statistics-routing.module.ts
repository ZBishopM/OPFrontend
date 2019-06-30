import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { StatisticsMatchComponent } from './statistics-match/statistics-match.component';
import { StatisticsPlayerComponent } from './statistics-player/statistics-player.component';
const routes: Routes = [
  {
    path:'',
    component: StatisticsListComponent
  },
  {
    path:'match/:id',
    component: StatisticsMatchComponent
  },
  {
    path:'player/:id',
    component: StatisticsPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
