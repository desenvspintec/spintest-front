import { TestBed } from '@angular/core/testing';

import { TabSubMenuService } from './tab-sub-menu.service';

describe('TabSubMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabSubMenuService = TestBed.get(TabSubMenuService);
    expect(service).toBeTruthy();
  });
});
