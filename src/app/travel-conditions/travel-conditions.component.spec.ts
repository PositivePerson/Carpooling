import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelConditionsComponent } from './travel-conditions.component';

describe('TravelConditionsComponent', () => {
  let component: TravelConditionsComponent;
  let fixture: ComponentFixture<TravelConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
