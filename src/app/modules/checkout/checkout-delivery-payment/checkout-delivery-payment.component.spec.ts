import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDeliveryPaymentComponent } from './checkout-delivery-payment.component';

describe('CheckoutDeliveryPaymentComponent', () => {
  let component: CheckoutDeliveryPaymentComponent;
  let fixture: ComponentFixture<CheckoutDeliveryPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutDeliveryPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDeliveryPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
