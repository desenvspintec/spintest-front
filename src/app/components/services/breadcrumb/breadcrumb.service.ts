import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private itemsMenu: MenuItem[] = [];

  constructor() { }

  get items() {
    return this.itemsMenu;
  }

  set items(items) {
    this.itemsMenu = items;
  }

}
