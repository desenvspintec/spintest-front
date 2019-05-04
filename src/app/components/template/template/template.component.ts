import { Component, OnInit } from '@angular/core';

// Services
import { KeycloakService } from 'keycloak-angular';
import { MenuItem } from 'primeng/api';
import { LoadingService } from '../../services/loading-service/loading.service';
import { BreadcrumbService } from '../../services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public home: MenuItem;

  constructor(
    private keycloakService: KeycloakService,
    public loadingService: LoadingService,
    public breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    this.home = { icon: 'pi pi-home' };
  }

  mobileMenuActive: boolean;

  onMobileMenuButton(event) {
    this.mobileMenuActive = !this.mobileMenuActive;
    event.preventDefault();
  }

  hideMobileMenu(event) {
    this.mobileMenuActive = false;
    event.preventDefault();
  }

  logout(event) {
    this.keycloakService.logout();
  }
}
