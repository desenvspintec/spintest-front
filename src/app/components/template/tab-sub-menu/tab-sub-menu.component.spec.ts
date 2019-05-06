import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSubMenuComponent } from './tab-sub-menu.component';

describe('TabSubMenuComponent', () => {
  let component: TabSubMenuComponent;
  let fixture: ComponentFixture<TabSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
