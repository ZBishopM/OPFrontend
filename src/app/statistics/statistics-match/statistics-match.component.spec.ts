import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsMatchComponent } from './statistics-match.component';

describe('StatisticsMatchComponent', () => {
  let component: StatisticsMatchComponent;
  let fixture: ComponentFixture<StatisticsMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
