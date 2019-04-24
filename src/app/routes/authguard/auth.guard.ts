import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';
import { environment } from '../../../environments/environment';
import { BreadcrumbService } from 'src/app/components/services/breadcrumb/breadcrumb.service';
import { Project } from 'src/environments/project';
import { TabMenuService } from 'src/app/components/services/tab-menu/tab-menu.service';
import { TabMenuComponent } from 'src/app/components/template/tab-menu/tab-menu.component';


@Injectable()
export class AuthGuard extends KeycloakAuthGuard {
  constructor(protected router: Router,
    protected keycloakAngular: KeycloakService,
    private breadcrumbService: BreadcrumbService,
    private tabMenuService: TabMenuService) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      this.setBreadCrumb(route);
      this.setTabMenu(route);
      if (environment.production) {
        if (!this.authenticated) {
          this.keycloakAngular.login();
          return;
        }

        const requiredRoles = route.data.roles;
        if (!requiredRoles || requiredRoles.length === 0) {
          return resolve(true);
        } else {
          if (!this.roles || this.roles.length === 0) {
            resolve(false);
          }
          let granted: boolean = false;
          for (const requiredRole of requiredRoles) {
            if (this.roles.indexOf(requiredRole) > -1) {
              granted = true;
              break;
            }
          }
          resolve(granted);
        }
      } else {
        return resolve(true);
      }
    });
  }

  setTabMenu(route: ActivatedRouteSnapshot) {
    this.tabMenuService.items = undefined;
    route.pathFromRoot.forEach(path => {
      Project.pages.forEach(page => {
        if (path.routeConfig) {
          
          this.setTabMenuPage(page,path.routeConfig.path);
        }
      });
    });
    
  }

  setTabMenuPage(page, path) {
    if (page.path === path && page.tabMenu && page.children) {
      console.log(page.children);
      this.tabMenuService.items = page.children.filter(pg =>{
        return pg.label;
      });
    }
    if (page.children){
      page.children.forEach(subpage =>{
        this.setTabMenuPage(subpage,path);
      });
    }
  }

  setBreadCrumb(route: ActivatedRouteSnapshot) {

    this.breadcrumbService.items = [];
    let pages = Project.pages;
    let menu = JSON.parse(JSON.stringify(Project.menu));
    route.pathFromRoot.forEach(path => {
      if (path.routeConfig) {
        /*menu.items.forEach(item => {
          this.setBreadCrumbMenu(item, path.routeConfig.path);
        });*/

        pages.forEach(page => {
          this.setBreadCrumbPage(page, path.routeConfig.path);
        });
      }
    });
  }

  setBreadCrumbMenu(menu, path) {
    if (menu.label && menu.routerLink === path) {
      this.breadcrumbService.items.push(menu);
    }
    if (menu.items) {
      menu.items.forEach(submenu => {
        this.setBreadCrumbPage(submenu, path);
      });
    }
  }

  setBreadCrumbPage(page, path) {
    if (page.label && page.routerLink === path) {
      this.breadcrumbService.items.push(page);
    }
    if (page.children) {
      page.children.forEach(subpage => {
        this.setBreadCrumbPage(subpage, path);
      });
    }
  }
}