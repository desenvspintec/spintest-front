import { TestBed } from '@angular/core/testing';

import { ContaEntradaService } from './conta-entrada.service';

describe('ContaEntradaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContaEntradaService = TestBed.get(ContaEntradaService);
    expect(service).toBeTruthy();
  });
});
