import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSubscribeDialogComponent } from './footer-subscribe-dialog.component';

describe('FooterSubscribeDialogComponent', () => {
  let component: FooterSubscribeDialogComponent;
  let fixture: ComponentFixture<FooterSubscribeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSubscribeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSubscribeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
