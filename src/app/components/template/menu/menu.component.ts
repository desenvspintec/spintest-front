import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../../template/template/template.component';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../services/breadcrumb/breadcrumb.service';
import { Project } from 'src/environments/project';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(public template: TemplateComponent,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    let project = JSON.parse(JSON.stringify(Project));
    let menus = project.menu.items;
    this.items = menus;
  }

  command(event){

  }

}
