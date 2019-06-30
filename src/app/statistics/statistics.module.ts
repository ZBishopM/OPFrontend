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
import { StatisticsService } from './statistics.service';
import { MatIconModule } from '@angular/material';
import { StatisticsMatchComponent } from './statistics-match/statistics-match.component';
import { StatisticsPlayerComponent } from './statistics-player/statistics-player.component';
@NgModule({
  declarations: [StatisticsListComponent, StatisticsMatchComponent, StatisticsPlayerComponent],
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
