import { TestBed } from '@angular/core/testing';

import { ProjetoTesteService } from './projeto-teste.service';

describe('ProjetoTesteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjetoTesteService = TestBed.get(ProjetoTesteService);
    expect(service).toBeTruthy();
  });
});
