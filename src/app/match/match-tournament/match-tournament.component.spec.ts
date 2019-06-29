import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTournamentComponent } from './match-tournament.component';

describe('MatchTournamentComponent', () => {
  let component: MatchTournamentComponent;
  let fixture: ComponentFixture<MatchTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
