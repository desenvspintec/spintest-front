import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanoDeTesteComponent } from './lista-plano-de-teste.component';

describe('ListaPlanoDeTesteComponent', () => {
  let component: ListaPlanoDeTesteComponent;
  let fixture: ComponentFixture<ListaPlanoDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlanoDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanoDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
