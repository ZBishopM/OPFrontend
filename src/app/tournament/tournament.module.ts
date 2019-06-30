import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentListComponent } from './tournament-list/tournament-list.component';


import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from "@angular/material/tabs";
import { TournamentCreateComponent } from './tournament-create/tournament-create.component';
import {MatDialogModule} from '@angular/material/dialog'
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';
import { TournamentService } from './tournament.service';
import { MatIconModule, MatSelectModule, MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TournamentEditComponent } from './tournament-edit/tournament-edit.component';
import { TournamentDetailComponent } from './tournament-detail/tournament-detail.component';


@NgModule({
  declarations: [TournamentListComponent, TournamentCreateComponent, RepDialogComponent, TournamentEditComponent,TournamentDetailComponent ],
  imports: [
    CommonModule,
    TournamentRoutingModule,

    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    
    MatCardModule,MatDialogModule,MatButtonModule
  ],
  entryComponents:[RepDialogComponent],
  providers:[TournamentService]
})
export class TournamentModule { }
