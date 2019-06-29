import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamCreateComponent } from './team-create/team-create.component';
const routes: Routes = [
  {
    path:'',
    component: TeamListComponent
  },
  {
    path:'new',
    component:TeamCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
