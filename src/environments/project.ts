import { TesteComponent } from 'src/app/pages/teste/teste.component';
import { TabMenuComponent } from 'src/app/components/template/tab-menu/tab-menu.component';
import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { EmpresaFolder } from './cadastro/empresa/empresa-folder';
import { FornecedorFolder } from './cadastro/fornecedor/fornecedor-folder';
import { ProdutoFolder } from './cadastro/produto-folder/produto-folder';
import { FuncionalidadeFolder } from './cadastro/funcionalidade-folder/funcionalidade-folder';
import { Menu } from './menu/menu';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard/dashboard/dashboard.component';
import { BaseLineFolder } from './plano-de-teste/baseline/baseline-folder';
import { PlanoDeTesteFolder } from './plano-de-teste/plano-de-teste/plano-de-teste';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';



export const Project = {
    menu: Menu,
    pages: [
        {
            label: 'Dashboard',
            path: 'dash',
            routerLink: 'dash',
            component: OutletComponent,
            canActivate: [AuthGuard],
            children: [
                {
                    label: 'Dashboard',
                    path: 'dashboard',
                    routerLink: 'dashboard',
                    canActivate: [AuthGuard],
                    component: DashboardComponent
                    
                },
                { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
            ]
        }, {
            path: 'cadastro',
            routerLink: 'cadastro',
            label: 'Cadastro',
            component: OutletComponent,
            canActivate: [AuthGuard],
            children: [
                {
                    path: 'empresa',
                    routerLink: 'empresa',
                    label: 'Empresa',
                    component: TabMenuComponent,
                    tabMenu: true,
                    canActivate: [AuthGuard],
                    children: [
                        EmpresaFolder,
                        FornecedorFolder,
                        ProdutoFolder,
                        FuncionalidadeFolder,
                        { path: '**', pathMatch: 'full', redirectTo: 'emp' }
                    ],
                },
                { path: '**', pathMatch: 'full', redirectTo: 'empresa' }
            ]
        },
        {
            label: 'Projetos de Teste',
            path: 'projetodeteste',
            routerLink: 'projetodeteste',
            canActivate: [AuthGuard],
            component: TesteComponent

        }, {
            label: 'Planejamento',
            path: 'planejamento',
            routerLink: 'planejamento',
            component: OutletComponent,
            canActivate: [AuthGuard],
            children: [
                {
                    path: 'planodeteste',
                    routerLink: 'planodeteste',
                    label: 'Planos de Teste',
                    component: TabMenuComponent,
                    tabMenu: true,
                    canActivate: [AuthGuard],
                    children: [
                        PlanoDeTesteFolder,
                        BaseLineFolder,
                        { path: '**', pathMatch: 'full', redirectTo: 'plteste' }
                    ],
                },
                { path: '**', pathMatch: 'full', redirectTo: 'planejamento' }
            ]
        }, {
            path: '**',
            redirectTo: 'dash',
            pathMatch: 'full'
        }
    ]

}
