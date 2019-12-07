import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessAndSparComponent } from './wellness-and-spar.component';

describe('WellnessAndSparComponent', () => {
  let component: WellnessAndSparComponent;
  let fixture: ComponentFixture<WellnessAndSparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellnessAndSparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnessAndSparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
