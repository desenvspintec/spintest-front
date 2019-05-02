import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCasoDeTesteComponent } from './cadastrar-caso-de-teste.component';

describe('CadastrarCasoDeTesteComponent', () => {
  let component: CadastrarCasoDeTesteComponent;
  let fixture: ComponentFixture<CadastrarCasoDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarCasoDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCasoDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
