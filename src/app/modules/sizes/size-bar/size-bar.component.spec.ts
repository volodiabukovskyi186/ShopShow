import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeBarComponent } from './size-bar.component';

describe('SizeBarComponent', () => {
  let component: SizeBarComponent;
  let fixture: ComponentFixture<SizeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
