import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../../template/template/template.component';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../services/breadcrumb/breadcrumb.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  home: MenuItem;
  itens: MenuItem[] = [];
  constructor(public template: TemplateComponent,
    public breadcrumbService: BreadcrumbService,
    public keycloakService: KeycloakService) { }

  ngOnInit() {
    this.home = { icon: 'pi pi-home' };
    this.itens = [
      { label: 'Logout',command: this.command.bind(this), icon: 'pi pi-power-off' }
    ]
  }

  command(event){
    this.keycloakService.logout();
  }
}
