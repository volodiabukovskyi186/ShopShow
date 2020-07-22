import { TestBed } from '@angular/core/testing';

import { AuthCanNotGuard } from './auth-can-not.guard';

describe('AuthCanNotGuard', () => {
  let guard: AuthCanNotGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCanNotGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
