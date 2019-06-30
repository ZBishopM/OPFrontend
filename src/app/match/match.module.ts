import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MatchListComponent } from './match-list/match-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule, MatInputModule, MatTableModule, MatIconModule, MatSelectModule, MatDialogModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatchTournamentComponent } from './match-tournament/match-tournament.component';

@NgModule({
  declarations: [MatchListComponent, MatchTournamentComponent],
  imports: [
    CommonModule,
    MatchRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
   // HttpClientModule,
    MatCardModule,MatDialogModule,MatButtonModule
  ]
})
export class MatchModule { }
