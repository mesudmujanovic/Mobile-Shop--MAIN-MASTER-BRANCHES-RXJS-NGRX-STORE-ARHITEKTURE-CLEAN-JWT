import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wks1Component } from './wks1.component';

describe('Wks1Component', () => {
  let component: Wks1Component;
  let fixture: ComponentFixture<Wks1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wks1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wks1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
