import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyInOneClickDialogComponent } from './buy-in-one-click-dialog.component';

describe('BuyInOneClickDialogComponent', () => {
  let component: BuyInOneClickDialogComponent;
  let fixture: ComponentFixture<BuyInOneClickDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyInOneClickDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyInOneClickDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
