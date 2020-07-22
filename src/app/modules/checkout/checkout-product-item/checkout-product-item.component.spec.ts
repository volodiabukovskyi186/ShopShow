import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProductItemComponent } from './checkout-product-item.component';

describe('CheckoutProductItemComponent', () => {
  let component: CheckoutProductItemComponent;
  let fixture: ComponentFixture<CheckoutProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
