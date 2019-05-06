import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';
import { environment } from '../../../environments/environment';
import { BreadcrumbService } from 'src/app/components/services/breadcrumb/breadcrumb.service';
import { Project } from 'src/environments/project';
import { TabMenuService } from 'src/app/components/services/tab-menu/tab-menu.service';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { PubSubService } from 'angular7-pubsub';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { TabSubMenuService } from 'src/app/components/services/tab-menu/tab-sub-menu.service';

@Injectable()
export class AuthGuard extends KeycloakAuthGuard {
  constructor(protected router: Router,
    protected keycloakAngular: KeycloakService,
    private breadcrumbService: BreadcrumbService,
    private tabMenuService: TabMenuService,
    private tabSubMenuService: TabSubMenuService,
    private dataService: DataService,
    private pubSubService: PubSubService,
    private messageService: MessageService) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return new Promise(async (resolve, reject) => {
      this.tabMenuService.visible = false;
      this.tabSubMenuService.visible = false;
      this.setBreadCrumb(route);
      this.setCrud(route);
      this.setTabMenu(route);
      this.clearSelecteds(route);
      this.setRequired(route);
      setTimeout(() => {
        this.tabMenuService.visible = true;
        this.tabSubMenuService.visible = true;
      }, 5);


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

    });
  }

  clearSelecteds(route: ActivatedRouteSnapshot) {
    route.pathFromRoot.forEach(path => {
      if (path.routeConfig) {
        Project.pages.forEach(page => {
          this.clearSelectedsRecursive(null, page, path.routeConfig.path);
        });
      }
    });
  }

  clearSelectedsRecursive(beforePage, page, path) {
    if (page.children) {
      page.children.forEach(subpage => {
        if (beforePage && beforePage.tabMenu && page === beforePage.children[0]) {
          this.clearSelectedsPages(path, beforePage);
        }
        this.clearSelectedsRecursive(page, subpage, path);
      });
    }
  }

  clearSelectedsPages(selectedPath, menuTab) {
    let clear = false
    menuTab.children.forEach(page => {
      if (clear) {
        this.dataService.setData(page.selectedResource, undefined);
      }
      if (page.path === selectedPath) {
        clear = true;
      }
    });
  }

  setRequired(route: ActivatedRouteSnapshot) {
    route.pathFromRoot.forEach(path => {
      Project.pages.forEach(page => {
        if (path.routeConfig) {

          this.setRequiredPage(null, page, path.routeConfig.path);
        }
      });
    });
  }

  setRequiredPage(beforePage, page, path) {
    if (page.path === path) {

      if (beforePage && beforePage.crud) {
        if (beforePage.required) {
          let isRequiredNotOK = undefined;
          let msg = undefined;
          if (page.crudForm && beforePage.selectedResource) {
            let isNewRecord = this.dataService.getData(beforePage.selectedResource);
            if (isNewRecord) {
              isRequiredNotOK = this.isRequiredNotOK(beforePage.required.required_new);
              msg = this.getMsgRequired(beforePage.required.required_new);
            } else {
              isRequiredNotOK = this.isRequiredNotOK(beforePage.required.required_edit);
              msg = this.getMsgRequired(beforePage.required.required_edit);
            }
          } else if (page.crudList) {
            isRequiredNotOK = this.isRequiredNotOK(beforePage.required.required_list);
          }

          if (isRequiredNotOK && beforePage.required) {
            msg = this.getMsgRequired(beforePage.required.required_list);
            if (msg) {
              this.messageService.add({ severity: 'info', detail: msg });
            }
            this.router.navigate([isRequiredNotOK]);
          }
        }
      }
    }

    if (page.children) {
      page.children.forEach(subpage => {
        this.setRequiredPage(page, subpage, path);
      });
    }
  }

  getMsgRequired(requires) {
    let ret = undefined;
    if (requires) {
      requires.forEach(req => {
        if (req.channel && !this.dataService.getData(req.channel)) {
          if (!ret) {
            ret = req.msg;
          }
        }
      });
    }
    return ret;
  }

  isRequiredNotOK(requires) {
    let ret = undefined;
    if (requires) {
      requires.forEach(req => {
        if (req.channel && !this.dataService.getData(req.channel)) {
          if (!ret) {
            ret = req.redirect;
          }
        }
      });
    }
    return ret;
  }

  setTabMenu(route: ActivatedRouteSnapshot) {
    this.tabMenuService.items = [];
    this.tabSubMenuService.items = [];
    route.pathFromRoot.forEach(path => {
      Project.pages.forEach(page => {
        if (path.routeConfig) {

          this.setTabMenuPage(null, page, path.routeConfig.path);
        }
      });
    });
  }

  setTabMenuPage(beforePage, page, path) {
    if (page.path === path) {

      if (page.children && page.tabMenu) {
        this.tabMenuService.items = this.pageListToItemList(page.children.filter(pg => {
          return pg.label;
        }));
      }
      if (page.children && page.tabSubMenu) {
        this.tabSubMenuService.items = this.pageListToItemList(page.children.filter(pg => {
          return pg.label;
        }));
      }

    }

    if (page.children) {
      page.children.forEach(subpage => {
        this.setTabMenuPage(page, subpage, path);
      });
    }
  }

  setCrud(route: ActivatedRouteSnapshot) {
    route.pathFromRoot.forEach(path => {
      Project.pages.forEach(page => {
        if (path.routeConfig) {

          this.setCrudPage(null, page, path.routeConfig.path);
        }
      });
    });
  }

  setCrudPage(beforePage, page, path) {
    if (page.path === path) {

      if (beforePage) {
        let routerLink = beforePage.path + '/';
        if (beforePage.crud) {
          if (page.crudForm || page.crudList) {
            routerLink += page.path;
            beforePage.routerLink = routerLink;
          }
        }

      }

    }

    if (page.children) {
      page.children.forEach(subpage => {
        this.setCrudPage(page, subpage, path);
      });
    }
  }

  setBreadCrumb(route: ActivatedRouteSnapshot) {

    this.breadcrumbService.items = [];
    let pages = Project.pages;
    route.pathFromRoot.forEach(path => {
      if (path.routeConfig) {
        pages.forEach(page => {
          this.setBreadCrumbPage(page, path.routeConfig.path);
        });
      }
    });
  }

  setBreadCrumbPage(page, path) {
    if (page.label && page.path === path) {
      this.breadcrumbService.items.push(this.pageToItem(page));
    }
    if (page.children) {
      page.children.forEach(subpage => {
        this.setBreadCrumbPage(subpage, path);
      });
    }
  }

  pageListToItemList(pages): MenuItem[] {
    let itens: MenuItem[] = [];

    pages.forEach(page => {
      itens.push(this.pageToItem(page));
    });
    return itens;

  }
  pageToItem(page): MenuItem {
    let menuItem: MenuItem = {
      label: page.label,
      routerLink: page.routerLink
    }
    return menuItem;
  }
}