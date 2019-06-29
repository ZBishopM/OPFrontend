import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"
import { TeamRoutingModule } from './team-routing.module';
import { TeamListComponent } from './team-list/team-list.component';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from "@angular/material/tabs";
import { TeamCreateComponent } from './team-create/team-create.component';
import {MatDialogModule} from '@angular/material/dialog'
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';
import { TeamService } from './team.service';
import { MatIconModule } from '@angular/material';
@NgModule({
  declarations: [TeamListComponent, TeamCreateComponent, RepDialogComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,

    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
   // HttpClientModule,
    MatCardModule,MatDialogModule,MatButtonModule
  ],
  entryComponents:[RepDialogComponent],
  providers:[TeamService]
})
export class TeamModule { }
