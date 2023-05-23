import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCommComponent } from './like-comm.component';

describe('LikeCommComponent', () => {
  let component: LikeCommComponent;
  let fixture: ComponentFixture<LikeCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeCommComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
