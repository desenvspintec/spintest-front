import { TestBed } from '@angular/core/testing';

import { SuiteTesteService } from './suite-teste.service';

describe('SuiteTesteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuiteTesteService = TestBed.get(SuiteTesteService);
    expect(service).toBeTruthy();
  });
});
