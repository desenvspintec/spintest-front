import { TestBed } from '@angular/core/testing';

import { PaisService } from './pais.service';

describe('PaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaisService = TestBed.get(PaisService);
    expect(service).toBeTruthy();
  });
});
