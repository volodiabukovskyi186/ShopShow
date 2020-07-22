import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutContactFormComponent } from './checkout-contact-form.component';

describe('CheckoutContactFormComponent', () => {
  let component: CheckoutContactFormComponent;
  let fixture: ComponentFixture<CheckoutContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
