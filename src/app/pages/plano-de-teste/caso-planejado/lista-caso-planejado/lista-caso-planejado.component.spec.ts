import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCasoPlanejadoComponent } from './lista-caso-planejado.component';

describe('ListaCasoPlanejadoComponent', () => {
  let component: ListaCasoPlanejadoComponent;
  let fixture: ComponentFixture<ListaCasoPlanejadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCasoPlanejadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCasoPlanejadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
