import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { ListaProdutoComponent } from 'src/app/pages/empresa/produto/lista-produto/lista-produto.component';
import { CadastrarProdutoComponent } from 'src/app/pages/empresa/produto/cadastrar-produto/cadastrar-produto.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';

export const ProdutoFolder = {
    label: 'Produtos',
    routerLink: 'prod/listaproduto',
    path: 'prod',
    component: OutletComponent,
    crud: true,
    selectedResource: Channels.pages.cadastro.empresa.produto,
    canActivate: [AuthGuard],
    required: {
        required_list: [
            { 
                channel: Channels.pages.cadastro.empresa.fornecedor, 
                msg: 'Selecione um fornecedor.', 
                redirect: 'cadastro/empresa/fornec/listafornecedor' }
        ]
    },
    children: [
        { 
            label: 'Lista Produtos', 
            routerLink: 'listaproduto', 
            path: 'listaproduto', 
            component: ListaProdutoComponent,
            canActivate: [AuthGuard], 
            crudList: true 
        },
        { 
            label: 'Cadastro Produto', 
            routerLink: 'cadastroproduto', 
            path: 'cadastroproduto', 
            component: CadastrarProdutoComponent,
            canActivate: [AuthGuard], 
            crudForm: true 
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listaproduto' }
    ]
}