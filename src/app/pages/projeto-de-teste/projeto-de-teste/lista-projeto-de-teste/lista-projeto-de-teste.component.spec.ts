import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProjetoDeTesteComponent } from './lista-projeto-de-teste.component';

describe('ListaProjetoDeTesteComponent', () => {
  let component: ListaProjetoDeTesteComponent;
  let fixture: ComponentFixture<ListaProjetoDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProjetoDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProjetoDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
