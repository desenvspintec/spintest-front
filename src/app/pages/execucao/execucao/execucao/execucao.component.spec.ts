import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucaoComponent } from './execucao.component';

describe('ExecucaoComponent', () => {
  let component: ExecucaoComponent;
  let fixture: ComponentFixture<ExecucaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecucaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
