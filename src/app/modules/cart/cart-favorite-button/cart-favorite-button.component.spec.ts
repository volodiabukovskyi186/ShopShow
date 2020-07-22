import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFavoriteButtonComponent } from './cart-favorite-button.component';

describe('CartFavoriteButtonComponent', () => {
  let component: CartFavoriteButtonComponent;
  let fixture: ComponentFixture<CartFavoriteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartFavoriteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
