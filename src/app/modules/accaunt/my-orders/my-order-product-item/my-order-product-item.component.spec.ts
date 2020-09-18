import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderProductItemComponent } from './my-order-product-item.component';

describe('MyOrderProductItemComponent', () => {
  let component: MyOrderProductItemComponent;
  let fixture: ComponentFixture<MyOrderProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrderProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
