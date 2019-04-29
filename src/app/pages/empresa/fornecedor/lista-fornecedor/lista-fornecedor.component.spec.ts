import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFornecedorComponent } from './lista-fornecedor.component';

describe('ListaFornecedorComponent', () => {
  let component: ListaFornecedorComponent;
  let fixture: ComponentFixture<ListaFornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
