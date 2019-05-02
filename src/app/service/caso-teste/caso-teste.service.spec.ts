import { TestBed } from '@angular/core/testing';

import { CasoTesteService } from './caso-teste.service';

describe('CasoTesteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasoTesteService = TestBed.get(CasoTesteService);
    expect(service).toBeTruthy();
  });
});
