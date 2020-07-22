import { TestBed } from '@angular/core/testing';

import { CheckoutContactFormService } from './checkout-contact-form.service';

describe('CheckoutContactFormService', () => {
  let service: CheckoutContactFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutContactFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
