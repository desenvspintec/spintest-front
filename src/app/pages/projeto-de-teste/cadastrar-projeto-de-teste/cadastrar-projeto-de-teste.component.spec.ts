import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProjetoDeTesteComponent } from './cadastrar-projeto-de-teste.component';

describe('CadastrarProjetoDeTesteComponent', () => {
  let component: CadastrarProjetoDeTesteComponent;
  let fixture: ComponentFixture<CadastrarProjetoDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarProjetoDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarProjetoDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
