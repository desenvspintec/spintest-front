import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoDeTesteComponent } from './projeto-de-teste.component';

describe('ProjetoDeTesteComponent', () => {
  let component: ProjetoDeTesteComponent;
  let fixture: ComponentFixture<ProjetoDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
