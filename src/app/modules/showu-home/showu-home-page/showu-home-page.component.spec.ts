import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowuHomePageComponent } from './showu-home-page.component';

describe('ShowuHomePageComponent', () => {
  let component: ShowuHomePageComponent;
  let fixture: ComponentFixture<ShowuHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowuHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowuHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
