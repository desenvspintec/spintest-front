import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabMenuService {
  
  private itemsMenu = [];
  private selected = {};
  constructor() { }

  get items() {
    return this.itemsMenu;
  }

  set items(items) {
    this.itemsMenu = items;
  }

}
