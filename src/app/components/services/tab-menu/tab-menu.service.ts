import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabMenuService {
  
  private itemsMenu = [];
  private isVisible = true;

  constructor() { }

  get items() {
    return this.itemsMenu;
  }

  set items(items) {
    this.itemsMenu = items;
  }

  get visible(){
    return this.isVisible; 
  }

  set visible(visible){
    this.isVisible = visible;
  }

}
