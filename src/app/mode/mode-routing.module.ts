import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModeComponent } from './mode-list/mode.component';
import { ModeCreateComponent } from './mode-create/mode-create.component';
const routes: Routes = [
  {
    path:'',
    component: ModeComponent
  },
  {
    path:'new',
    component:ModeCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeRoutingModule { }
