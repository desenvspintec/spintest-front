import { TestBed } from '@angular/core/testing';

import { PessoaJuridicaService } from './pessoa-juridica.service';

describe('PessoaJuridicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PessoaJuridicaService = TestBed.get(PessoaJuridicaService);
    expect(service).toBeTruthy();
  });
});
