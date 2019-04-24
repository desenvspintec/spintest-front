import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFrontComponent } from './table-front.component';

describe('TableFrontComponent', () => {
  let component: TableFrontComponent;
  let fixture: ComponentFixture<TableFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
