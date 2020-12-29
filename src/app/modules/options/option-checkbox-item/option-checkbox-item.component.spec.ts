import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCheckboxItemComponent } from './option-checkbox-item.component';

describe('OptionCheckboxItemComponent', () => {
  let component: OptionCheckboxItemComponent;
  let fixture: ComponentFixture<OptionCheckboxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionCheckboxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionCheckboxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
