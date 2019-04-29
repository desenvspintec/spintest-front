import { TesteComponent } from 'src/app/pages/teste/teste.component';
import { TabMenuComponent } from 'src/app/components/template/tab-menu/tab-menu.component';
import { ListaEmpresaComponent } from 'src/app/pages/empresa/empresa/lista-empresa/lista-empresa.component';
import { ListaFornecedorComponent } from 'src/app/pages/empresa/fornecedor/lista-fornecedor/lista-fornecedor.component';
import { ListaProdutoComponent } from 'src/app/pages/empresa/produto/lista-produto/lista-produto.component';
import { ListaFuncionalidadeComponent } from 'src/app/pages/empresa/funcionalidade/lista-funcionalidade/lista-funcionalidade.component';
import { ListaProjetoDeTesteComponent } from 'src/app/pages/projeto-de-teste/lista-projeto-de-teste/lista-projeto-de-teste.component';
import { ListaPlanoDeTesteComponent } from 'src/app/pages/plano-de-teste/plano-de-teste/lista-plano-de-teste/lista-plano-de-teste.component';
import { CadastrarEmpresaComponent } from 'src/app/pages/empresa/empresa/cadastrar-empresa/cadastrar-empresa.component';
import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { CrudOutletComponent } from 'src/app/components/crud-outlet/crud-outlet.component';
import { CadastrarFornecedorComponent } from 'src/app/pages/empresa/fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { CadastrarProdutoComponent } from 'src/app/pages/empresa/produto/cadastrar-produto/cadastrar-produto.component';
import { CadastrarFuncionalidadeComponent } from 'src/app/pages/empresa/funcionalidade/cadastrar-funcionalidade/cadastrar-funcionalidade.component';



export const Project = {
    menu: {
        items: [{
            label: 'Dashboard',
            routerLink: 'dashboardmenu',
            items: [
                { label: 'Dashboard', icon: 'pi pi-spinner text-red', routerLink: 'dashboard' }
            ]
        },
        {
            label: 'Cadastros',
            routerLink: 'cadastro',
            items: [
                { label: 'Empresa', icon: 'pi pi-th-large text-purple', routerLink: 'cadastro/empresa' },
                { label: 'Projetos de Teste', icon: 'pi pi-sitemap', routerLink: 'projetodeteste' }
            ]
        }, {
            label: 'Planejamento',
            routerLink: 'planejamento',
            items: [
                { label: 'Planos de Teste', icon: 'pi pi-folder-open text-green', routerLink: 'planodeteste' }
            ]
        }]
    },
    pages: [
        {
            label: 'Dashboard',
            path: 'dashboard',
            routerLink: 'dashboard',
            component: TesteComponent,
        }, {
            path: 'cadastro',
            routerLink: 'cadastro',
            label: 'Cadastro',
            component: OutletComponent,
            children: [
                {
                    path: 'empresa',
                    routerLink: 'empresa',
                    label: 'Empresa',
                    component: TabMenuComponent,
                    tabMenu: true,
                    children: [
                        {
                            label: 'Empresa',
                            path: 'emp',
                            routerLink: 'emp/listaempresa',
                            component: OutletComponent,
                            crud: true,
                            children: [
                                { label: 'Lista de Empresas', routerLink: 'listaempresa', path: 'listaempresa', component: ListaEmpresaComponent, crudList: true },
                                { label: 'Cadastro Empresa', routerLink: 'cadastroempresa', path: 'cadastroempresa', component: CadastrarEmpresaComponent, crudForm: true },
                                { path: '**', pathMatch: 'full', redirectTo: 'listaempresa' }
                            ]
                        },
                        { 
                            label: 'Fornecedores', 
                            routerLink: 'fornec', 
                            path: 'fornec', 
                            component: OutletComponent,
                            crud: true,
                            children: [
                                {label: 'Lista Fornecedores', routerLink: 'listafornecedor', path: 'listafornecedor',component: ListaFornecedorComponent , crudList: true },
                                {label: 'Cadastro Fornecedor', routerLink: 'cadastrofornecedor', path: 'cadastrofornecedor',component: CadastrarFornecedorComponent , crudForm: true },
                                {path: '**', pathMatch: 'full', redirectTo: 'listafornecedor' } 
                            ]
                        },
                        { 
                            label: 'Produtos', 
                            routerLink: 'prod', 
                            path: 'prod', 
                            component: OutletComponent,
                            crud: true,
                            children: [
                                {label: 'Lista Produtos', routerLink: 'listaproduto', path: 'listaproduto', component: ListaProdutoComponent , crudList: true},
                                {label: 'Cadastro Produto', routerLink: 'cadastroproduto', path: 'cadastroproduto', component: CadastrarProdutoComponent , crudForm: true },
                                {path: '**', pathMatch: 'full', redirectTo: 'listaproduto' } 
                            ] 
                        },
                        { 
                            label: 'Funcionalidades', 
                            routerLink: 'func', 
                            path: 'func', 
                            component: ListaFuncionalidadeComponent,
                            crud: true,
                            children: [
                                {label: 'Lista Funcionalidades', routerLink: 'listafuncionalidade', path: 'listafuncionalidade', component: ListaFuncionalidadeComponent , crudList: true},
                                {label: 'Cadastro Funcionalidade', routerLink: 'cadastrofuncionalidade', path: 'cadastrofuncionalidade', component: CadastrarFuncionalidadeComponent , crudForm: true},
                                {path: '**', pathMatch: 'full', redirectTo: 'listafuncionalidade' } 
                            ] 
                        },
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
            component: ListaProjetoDeTesteComponent,
        }, {
            label: 'Planos de Teste',
            path: 'planodeteste',
            routerLink: 'planodeteste',
            component: ListaPlanoDeTesteComponent,
        }, {
            path: '**',
            redirectTo: 'dashboard',
            pathMatch: 'full'
        }
    ]

}
