import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallersSliderComponent } from './sallers-slider.component';

describe('SallersSliderComponent', () => {
  let component: SallersSliderComponent;
  let fixture: ComponentFixture<SallersSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallersSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallersSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
