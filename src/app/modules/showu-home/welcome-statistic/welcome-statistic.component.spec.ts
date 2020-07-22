import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeStatisticComponent } from './welcome-statistic.component';

describe('WelcomeStatisticComponent', () => {
  let component: WelcomeStatisticComponent;
  let fixture: ComponentFixture<WelcomeStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
