import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookAppComponent } from './cook-app.component';

describe('CookAppComponent', () => {
  let component: CookAppComponent;
  let fixture: ComponentFixture<CookAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
