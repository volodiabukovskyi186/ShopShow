import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutRecipientContactFormComponent } from './checkout-recipient-contact-form.component';

describe('CheckoutRecipientContactFormComponent', () => {
  let component: CheckoutRecipientContactFormComponent;
  let fixture: ComponentFixture<CheckoutRecipientContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutRecipientContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutRecipientContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
