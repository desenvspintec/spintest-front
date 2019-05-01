import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSuiteDeTesteComponent } from './lista-suite-de-teste.component';

describe('ListaSuiteDeTesteComponent', () => {
  let component: ListaSuiteDeTesteComponent;
  let fixture: ComponentFixture<ListaSuiteDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSuiteDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSuiteDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
