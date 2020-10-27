import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWishlistItemComponent } from './card-wishlist-item.component';

describe('CardWishlistItemComponent', () => {
  let component: CardWishlistItemComponent;
  let fixture: ComponentFixture<CardWishlistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWishlistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWishlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
