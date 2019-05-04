import { Menu } from './menu/menu';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';

// Components
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard/dashboard/dashboard.component';
import { TabMenuComponent } from 'src/app/components/template/tab-menu/tab-menu.component';
import { OutletComponent } from 'src/app/components/outlet/outlet.component';

// Empresa folders
import { EmpresaFolder } from './cadastro/empresa/empresa-folder';
import { FornecedorFolder } from './cadastro/fornecedor/fornecedor-folder';
import { ProdutoFolder } from './cadastro/produto-folder/produto-folder';
import { FuncionalidadeFolder } from './cadastro/funcionalidade-folder/funcionalidade-folder';

// Projeto de teste folders
import { ProjetoTesteFolder } from './projeto-de-teste/projeto-de-teste/projeto-de-teste';
import { SuiteTesteFolder } from './projeto-de-teste/suite-de-teste/suite-de-teste';
import { CasoTesteFolder } from './projeto-de-teste/caso-de-teste/caso-de-teste';
import { PassoTesteFolder } from './projeto-de-teste/passo-de-teste/passo-de-teste';

// Plano de teste folders
import { PlanoDeTesteFolder } from './plano-de-teste/plano-de-teste/plano-de-teste';
import { BaseLineFolder } from './plano-de-teste/baseline/baseline-folder';

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
            children: [
                {
                    path: 'projeto',
                    routerLink: 'projeto',
                    label: 'Projeto',
                    component: TabMenuComponent,
                    tabMenu: true,
                    canActivate: [AuthGuard],
                    children: [
                        ProjetoTesteFolder,
                        SuiteTesteFolder,
                        CasoTesteFolder,
                        PassoTesteFolder,
                        { path: '**', pathMatch: 'full', redirectTo: 'pro' }
                    ],
                },
                { path: '**', pathMatch: 'full', redirectTo: 'projeto' }
            ]

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
