import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOutletComponent } from './crud-outlet.component';

describe('CrudOutletComponent', () => {
  let component: CrudOutletComponent;
  let fixture: ComponentFixture<CrudOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
