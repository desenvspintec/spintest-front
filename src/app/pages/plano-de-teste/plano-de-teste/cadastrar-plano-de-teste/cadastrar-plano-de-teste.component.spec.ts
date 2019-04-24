import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPlanoDeTesteComponent } from './cadastrar-plano-de-teste.component';

describe('CadastrarPlanoDeTesteComponent', () => {
  let component: CadastrarPlanoDeTesteComponent;
  let fixture: ComponentFixture<CadastrarPlanoDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPlanoDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPlanoDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
