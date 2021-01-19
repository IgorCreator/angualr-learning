import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer4Component } from './exer4.component';

describe('Exer4Component', () => {
  let component: Exer4Component;
  let fixture: ComponentFixture<Exer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
