import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabSubMenuService } from '../../services/tab-menu/tab-sub-menu.service';

@Component({
  selector: 'app-tab-sub-menu',
  templateUrl: './tab-sub-menu.component.html',
  styleUrls: ['./tab-sub-menu.component.css']
})
export class TabSubMenuComponent implements OnInit {

  activeItem: MenuItem;
  @ViewChild('menuItems') menu: MenuItem[];

  constructor(public tabSubMenuService: TabSubMenuService) { }

  ngOnInit() {

  }

  activateMenu() {
    this.activeItem = this.menu['activeItem'];
  }

}
