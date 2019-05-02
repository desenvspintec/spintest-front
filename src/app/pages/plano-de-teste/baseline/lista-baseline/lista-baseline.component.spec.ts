import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBaselineComponent } from './lista-baseline.component';

describe('ListaBaselineComponent', () => {
  let component: ListaBaselineComponent;
  let fixture: ComponentFixture<ListaBaselineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBaselineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBaselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
