import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersSliderComponent } from './manufacturers-slider.component';

describe('ManufacturersSliderComponent', () => {
  let component: ManufacturersSliderComponent;
  let fixture: ComponentFixture<ManufacturersSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturersSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
