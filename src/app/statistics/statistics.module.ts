import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from "@angular/material/tabs";
import {MatDialogModule} from '@angular/material/dialog'
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';
import { StatisticsService } from './statistics.service';
import { MatIconModule } from '@angular/material';
@NgModule({
  declarations: [StatisticsListComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,

    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
   // HttpClientModule,
    MatCardModule,MatDialogModule,MatButtonModule
  ],
  entryComponents:[],
  providers:[StatisticsService]
})
export class StatisticsModule { }
