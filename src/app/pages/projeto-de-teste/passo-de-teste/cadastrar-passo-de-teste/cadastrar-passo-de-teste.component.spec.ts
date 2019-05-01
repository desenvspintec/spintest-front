import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPassoDeTesteComponent } from './cadastrar-passo-de-teste.component';

describe('CadastrarPassoDeTesteComponent', () => {
  let component: CadastrarPassoDeTesteComponent;
  let fixture: ComponentFixture<CadastrarPassoDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPassoDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPassoDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
