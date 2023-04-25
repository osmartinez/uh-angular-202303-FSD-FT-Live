import { TestBed } from '@angular/core/testing';

import { AbandonarGuard } from './abandonar.guard';

describe('AbandonarGuard', () => {
  let guard: AbandonarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AbandonarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
