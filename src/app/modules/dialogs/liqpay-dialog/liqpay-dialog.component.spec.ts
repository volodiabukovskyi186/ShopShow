import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqpayDialogComponent } from './liqpay-dialog.component';

describe('LiqpayDialogComponent', () => {
  let component: LiqpayDialogComponent;
  let fixture: ComponentFixture<LiqpayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiqpayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiqpayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
