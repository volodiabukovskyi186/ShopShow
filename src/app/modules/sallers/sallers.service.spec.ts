import { TestBed } from '@angular/core/testing';

import { SallersService } from './sallers.service';

describe('SallersService', () => {
  let service: SallersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SallersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
