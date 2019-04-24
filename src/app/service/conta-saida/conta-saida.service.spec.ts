import { TestBed } from '@angular/core/testing';

import { ContaSaidaService } from './conta-saida.service';

describe('ContaSaidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContaSaidaService = TestBed.get(ContaSaidaService);
    expect(service).toBeTruthy();
  });
});
