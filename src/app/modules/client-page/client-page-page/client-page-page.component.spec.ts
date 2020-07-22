import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPagePageComponent } from './client-page-page.component';

describe('ClientPagePageComponent', () => {
  let component: ClientPagePageComponent;
  let fixture: ComponentFixture<ClientPagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
