import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackSuccessDialogComponent } from './callback-success-dialog.component';

describe('CallbackSuccessDialogComponent', () => {
  let component: CallbackSuccessDialogComponent;
  let fixture: ComponentFixture<CallbackSuccessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackSuccessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
