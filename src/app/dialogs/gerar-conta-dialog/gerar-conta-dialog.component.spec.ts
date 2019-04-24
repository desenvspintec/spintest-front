import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarContaDialogComponent } from './gerar-conta-dialog.component';

describe('GerarContaDialogComponent', () => {
  let component: GerarContaDialogComponent;
  let fixture: ComponentFixture<GerarContaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerarContaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerarContaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
