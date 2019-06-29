import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeCreateComponent } from './mode-create.component';

describe('ModeCreateComponent', () => {
  let component: ModeCreateComponent;
  let fixture: ComponentFixture<ModeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
