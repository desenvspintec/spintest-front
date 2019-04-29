import { TestBed } from '@angular/core/testing';

import { FuncionalidadeService } from './funcionalidade.service';

describe('FuncionalidadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionalidadeService = TestBed.get(FuncionalidadeService);
    expect(service).toBeTruthy();
  });
});
