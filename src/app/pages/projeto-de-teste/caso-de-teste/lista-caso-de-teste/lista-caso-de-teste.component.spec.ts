import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCasoDeTesteComponent } from './lista-caso-de-teste.component';

describe('ListaCasoDeTesteComponent', () => {
  let component: ListaCasoDeTesteComponent;
  let fixture: ComponentFixture<ListaCasoDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCasoDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCasoDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
