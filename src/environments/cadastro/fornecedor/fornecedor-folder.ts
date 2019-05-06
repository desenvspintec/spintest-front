import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { ListaFornecedorComponent } from 'src/app/pages/empresa/fornecedor/lista-fornecedor/lista-fornecedor.component';
import { CadastrarFornecedorComponent } from 'src/app/pages/empresa/fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';
import { TabSubMenuComponent } from 'src/app/components/template/tab-sub-menu/tab-sub-menu.component';
import { CadastrarContatoComponent } from 'src/app/pages/empresa/fornecedor/cadastrar-contato/cadastrar-contato.component';
import { ListaContatoComponent } from 'src/app/pages/empresa/fornecedor/lista-contato/lista-contato.component';

export const FornecedorFolder = {
    label: 'Fornecedores',
    path: 'fornecfodler',
    routerLink: 'fornecfodler/fornec/listafornecedor',
    component: TabSubMenuComponent,
    tabSubMenu: true,
    canActivate: [AuthGuard],
    children: [
        {
            label: 'Fornecedores',
            routerLink: 'fornec/listafornecedor',
            path: 'fornec',
            component: OutletComponent,
            crud: true,
            canActivate: [AuthGuard],
            selectedResource: Channels.pages.cadastro.empresa.fornecedor,
            required: {
                required_list: [
                    {
                        channel: Channels.pages.cadastro.empresa.empresa,
                        msg: 'Selecione uma empresa.',
                        redirect: 'cadastro/empresa/emp/listaempresa'
                    }
                ]
            },
            children: [
                {
                    label: 'Lista Fornecedores',
                    routerLink: 'listafornecedor',
                    path: 'listafornecedor',
                    canActivate: [AuthGuard],
                    component: ListaFornecedorComponent,
                    crudList: true
                },

                {
                    label: 'Cadastro Fornecedor',
                    routerLink: 'cadastrofornecedor',
                    path: 'cadastrofornecedor',
                    component: CadastrarFornecedorComponent,
                    canActivate: [AuthGuard],
                    crudForm: true
                },
                { path: '**', pathMatch: 'full', redirectTo: 'listafornecedor' }
            ]
        }, {
            label: 'Contatos',
            routerLink: 'contato/listacontato',
            component: OutletComponent,
            path: 'contato',
            crud: true,
            canActivate: [AuthGuard],
            selectedResource: Channels.pages.cadastro.empresa.contato,
            required: {
                required_list: [
                    {
                        channel: Channels.pages.cadastro.empresa.fornecedor,
                        msg: 'Selecione um fornecedor.',
                        redirect: 'cadastro/empresa/fornecfodler/fornec/listafornecedor'
                    }
                ]
            },
            children: [
                {
                    label: 'Contato',
                    routerLink: 'cadastrocontato',
                    path: 'cadastrocontato',
                    component: CadastrarContatoComponent,
                    canActivate: [AuthGuard],
                    crudForm: true
                }, {
                    label: 'Lista Contato',
                    routerLink: 'listacontato',
                    path: 'listacontato',
                    component: ListaContatoComponent,
                    canActivate: [AuthGuard],
                    crudList: true
                },
                { path: '**', pathMatch: 'full', redirectTo: 'listacontato' }
            ]
        },
        { path: '**', pathMatch: 'full', redirectTo: 'fornecfodler' }
    ]
}


