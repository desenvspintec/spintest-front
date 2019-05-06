import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class TabSubMenuService {

  private itemsMenu: MenuItem[] = [];
  private isVisible = true;

  constructor() { }

  get items(): MenuItem[] {
    return this.itemsMenu;
  }

  set items(items: MenuItem[]) {
    this.itemsMenu = items;
  }

  get visible() {
    return this.isVisible;
  }

  set visible(visible) {
    this.isVisible = visible;
  }
}
