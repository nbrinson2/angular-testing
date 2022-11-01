import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlunderComponent } from './blunder.component';

describe('BlunderComponent', () => {
  let component: BlunderComponent;
  let fixture: ComponentFixture<BlunderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlunderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
