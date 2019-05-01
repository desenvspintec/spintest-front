import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSuiteDeTesteComponent } from './cadastrar-suite-de-teste.component';

describe('CadastrarSuiteDeTesteComponent', () => {
  let component: CadastrarSuiteDeTesteComponent;
  let fixture: ComponentFixture<CadastrarSuiteDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarSuiteDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSuiteDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
