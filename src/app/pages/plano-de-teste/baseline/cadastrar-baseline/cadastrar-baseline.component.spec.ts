import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarBaselineComponent } from './cadastrar-baseline.component';

describe('CadastrarBaselineComponent', () => {
  let component: CadastrarBaselineComponent;
  let fixture: ComponentFixture<CadastrarBaselineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarBaselineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarBaselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
