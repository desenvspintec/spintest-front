import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../../template/template/template.component';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../services/breadcrumb/breadcrumb.service';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  home: MenuItem;
  itens: MenuItem[] = [];
  constructor(
    private _router: Router,
    public template: TemplateComponent,
    public breadcrumbService: BreadcrumbService,
    public keycloakService: KeycloakService) { }

  ngOnInit() {
    this.home = { icon: 'pi pi-home' };
    this.itens = [
      {
        title: 'Meu Perfil',
        label: 'Meu Perfil',
        command: this.perfil.bind(this),
        icon: 'pi pi-cog'
      },
      {
        title: 'Configurações',
        label: 'Configurações',
        command: this.configuracoes.bind(this),
        icon: 'pi pi-cog'
      },
      {
        label: 'Logout',
        command: this.command.bind(this),
        icon: 'pi pi-power-off'
      }
    ]
  }

  command(event) {
    this.keycloakService.logout();
  }

  configuracoes() {
    this._router.navigate(['/configuracoes/usuarios']);
  }

  perfil() {
    this._router.navigate(['/configuracoes/usuarios/perfil']);
  }
}
