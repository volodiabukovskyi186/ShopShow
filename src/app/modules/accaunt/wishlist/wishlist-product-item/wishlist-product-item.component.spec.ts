import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistProductItemComponent } from './wishlist-product-item.component';

describe('WishlistProductItemComponent', () => {
  let component: WishlistProductItemComponent;
  let fixture: ComponentFixture<WishlistProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
