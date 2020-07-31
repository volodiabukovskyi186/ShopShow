import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackDialogComponent } from './callback-dialog.component';

describe('CallbackDialogComponent', () => {
  let component: CallbackDialogComponent;
  let fixture: ComponentFixture<CallbackDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
