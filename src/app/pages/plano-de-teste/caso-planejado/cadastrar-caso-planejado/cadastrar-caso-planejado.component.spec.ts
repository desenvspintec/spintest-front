import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCasoPlanejadoComponent } from './cadastrar-caso-planejado.component';

describe('CadastrarCasoPlanejadoComponent', () => {
  let component: CadastrarCasoPlanejadoComponent;
  let fixture: ComponentFixture<CadastrarCasoPlanejadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarCasoPlanejadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCasoPlanejadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
