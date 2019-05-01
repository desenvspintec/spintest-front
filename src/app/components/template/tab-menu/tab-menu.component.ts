import { Component, OnInit } from '@angular/core';
import { TabMenuService } from '../../services/tab-menu/tab-menu.service';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {


  

  constructor(public tabMenuService: TabMenuService) { }

  ngOnInit() {
 
  }

}
