import { TestBed } from '@angular/core/testing';

import { PassoTesteService } from './passo-teste.service';

describe('PassoTesteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassoTesteService = TestBed.get(PassoTesteService);
    expect(service).toBeTruthy();
  });
});
