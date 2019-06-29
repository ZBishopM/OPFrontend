import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeCreateComponent } from './mode-create/mode-create.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from "@angular/material/tabs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog'
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';

import { MatIconModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { ModeRoutingModule } from './mode-routing.module';
import { ModeService } from './mode.service';
import { ModeComponent } from './mode-list/mode.component';

@NgModule({
  declarations: [ModeComponent, ModeCreateComponent, RepDialogComponent],
  imports: [
    CommonModule,
    ModeRoutingModule,

    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,

    MatCardModule,MatDialogModule,MatButtonModule
  ],
  entryComponents:[RepDialogComponent],
  providers:[ModeService]
})
export class ModeModule { }
