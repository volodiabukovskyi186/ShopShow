import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReviewProductItemComponent } from './my-review-product-item.component';

describe('MyReviewProductItemComponent', () => {
  let component: MyReviewProductItemComponent;
  let fixture: ComponentFixture<MyReviewProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReviewProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReviewProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
