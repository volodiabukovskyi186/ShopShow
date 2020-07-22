import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewiewBlockComponent } from './rewiew-block.component';

describe('RewiewBlockComponent', () => {
  let component: RewiewBlockComponent;
  let fixture: ComponentFixture<RewiewBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewiewBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewiewBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
