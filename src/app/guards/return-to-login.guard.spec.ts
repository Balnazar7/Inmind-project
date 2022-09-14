import { TestBed } from '@angular/core/testing';

import { ReturnToLoginGuard } from './return-to-login.guard';

describe('ReturnToLoginGuard', () => {
  let guard: ReturnToLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReturnToLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
