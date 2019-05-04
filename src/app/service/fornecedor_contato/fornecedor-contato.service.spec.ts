import { TestBed } from '@angular/core/testing';

import { FornecedorContatoService } from './fornecedor-contato.service';

describe('FornecedorContatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FornecedorContatoService = TestBed.get(FornecedorContatoService);
    expect(service).toBeTruthy();
  });
});
