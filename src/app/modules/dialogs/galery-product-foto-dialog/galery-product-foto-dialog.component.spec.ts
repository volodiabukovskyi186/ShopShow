import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryProductFotoDialogComponent } from './galery-product-foto-dialog.component';

describe('GaleryProductFotoDialogComponent', () => {
  let component: GaleryProductFotoDialogComponent;
  let fixture: ComponentFixture<GaleryProductFotoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleryProductFotoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryProductFotoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
