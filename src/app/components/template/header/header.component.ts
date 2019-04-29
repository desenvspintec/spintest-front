import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../../template/template/template.component';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  home: MenuItem;

  constructor(public template : TemplateComponent,
    public breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
   this.home = {icon: 'pi pi-home'};
  }

}
