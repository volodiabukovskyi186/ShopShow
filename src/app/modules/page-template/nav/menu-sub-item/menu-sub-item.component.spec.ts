import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubItemComponent } from './menu-sub-item.component';

describe('MenuSubItemComponent', () => {
  let component: MenuSubItemComponent;
  let fixture: ComponentFixture<MenuSubItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSubItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
