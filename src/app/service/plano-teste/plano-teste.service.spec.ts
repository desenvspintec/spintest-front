import { TestBed } from '@angular/core/testing';

import { PlanoTesteService } from './plano-teste.service';

describe('PlanoTesteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanoTesteService = TestBed.get(PlanoTesteService);
    expect(service).toBeTruthy();
  });
});
