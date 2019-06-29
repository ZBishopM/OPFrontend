import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeCreateComponent } from './mode-create/mode-create.component';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';
import { ModeRoutingModule } from './mode-routing.module';
import { ModeService } from './mode.service';
import { ModeComponent } from './mode-list/mode.component';

@NgModule({
  declarations: [ModeComponent, ModeCreateComponent, RepDialogComponent],
  imports: [
    CommonModule,
    ModeRoutingModule
  ],
  entryComponents:[RepDialogComponent],
  providers:[ModeService]
})
export class ModeModule { }
