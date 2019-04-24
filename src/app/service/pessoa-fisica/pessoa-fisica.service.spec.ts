import { TestBed } from '@angular/core/testing';

import { PessoaFisicaService } from './pessoa-fisica.service';

describe('PessoaFisicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PessoaFisicaService = TestBed.get(PessoaFisicaService);
    expect(service).toBeTruthy();
  });
});
