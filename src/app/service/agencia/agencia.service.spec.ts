import { TestBed } from '@angular/core/testing';

import { AgenciaService } from './agencia.service';

describe('AgenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgenciaService = TestBed.get(AgenciaService);
    expect(service).toBeTruthy();
  });
});
