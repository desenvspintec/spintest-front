import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPassoDeTesteComponent } from './lista-passo-de-teste.component';

describe('ListaPassoDeTesteComponent', () => {
  let component: ListaPassoDeTesteComponent;
  let fixture: ComponentFixture<ListaPassoDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPassoDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPassoDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
