import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionViewPageComponent } from './collection-view-page.component';

describe('CollectionViewPageComponent', () => {
  let component: CollectionViewPageComponent;
  let fixture: ComponentFixture<CollectionViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
