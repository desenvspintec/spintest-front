import { TestBed } from '@angular/core/testing';

import { BaseLinePlanejadoService } from './base-line-planejado.service';

describe('BaseLinePlanejadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseLinePlanejadoService = TestBed.get(BaseLinePlanejadoService);
    expect(service).toBeTruthy();
  });
});
