import { Component, OnInit, ViewChild } from '@angular/core';
import { TabMenuService } from '../../services/tab-menu/tab-menu.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {


  activeItem: MenuItem;
  @ViewChild('menuItems') menu: MenuItem[];

  constructor(public tabMenuService: TabMenuService) { }

  ngOnInit() {
 
  }

  activateMenu(){
    this.activeItem =this.menu['activeItem'];
 }

}
