import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarContatoComponent } from './cadastrar-contato.component';

describe('CadastrarContatoComponent', () => {
  let component: CadastrarContatoComponent;
  let fixture: ComponentFixture<CadastrarContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
