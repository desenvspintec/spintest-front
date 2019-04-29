import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFuncionalidadeComponent } from './cadastrar-funcionalidade.component';

describe('CadastrarFuncionalidadeComponent', () => {
  let component: CadastrarFuncionalidadeComponent;
  let fixture: ComponentFixture<CadastrarFuncionalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarFuncionalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarFuncionalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
