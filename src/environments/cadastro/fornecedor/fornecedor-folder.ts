import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { ListaFornecedorComponent } from 'src/app/pages/empresa/fornecedor/lista-fornecedor/lista-fornecedor.component';
import { CadastrarFornecedorComponent } from 'src/app/pages/empresa/fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';

export const FornecedorFolder = {
    label: 'Fornecedores',
    routerLink: 'fornec/listafornecedor',
    path: 'fornec',
    component: OutletComponent,
    crud: true,
    canActivate: [AuthGuard],
    selectedResource: Channels.pages.cadastro.empresa.fornecedor,
    required: {
        required_list: [
            { channel: Channels.pages.cadastro.empresa.empresa, msg: 'Selecione uma empresa!', redirect: 'cadastro/empresa/emp/listaempresa' }
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
}