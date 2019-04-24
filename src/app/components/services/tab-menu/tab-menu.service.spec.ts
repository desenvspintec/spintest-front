import { TestBed } from '@angular/core/testing';

import { TabMenuService } from './tab-menu.service';

describe('TabMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabMenuService = TestBed.get(TabMenuService);
    expect(service).toBeTruthy();
  });
});
