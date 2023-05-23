import { TestBed } from '@angular/core/testing';

import { LikeComService } from './like-com.service';

describe('LikeComService', () => {
  let service: LikeComService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeComService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
