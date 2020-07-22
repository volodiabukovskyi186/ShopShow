import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccauntButtonComponent } from './accaunt-button.component';

describe('AccauntButtonComponent', () => {
  let component: AccauntButtonComponent;
  let fixture: ComponentFixture<AccauntButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccauntButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccauntButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
