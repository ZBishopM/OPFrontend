import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentCreateComponent } from './tournament-create/tournament-create.component';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';
import { MatTabsModule, MatInputModule, MatTableModule, MatIconModule, MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamentService } from './tournament.service';

@NgModule({
  declarations: [TournamentListComponent, TournamentCreateComponent, RepDialogComponent],
  imports: [
    CommonModule,
    TournamentRoutingModule,

    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,

    MatCardModule,MatDialogModule,MatButtonModule
  ],
  entryComponents:[RepDialogComponent],
  providers:[TournamentService]
})
export class TournamentModule { }
