import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { ListaProdutoComponent } from 'src/app/pages/empresa/produto/lista-produto/lista-produto.component';
import { CadastrarProdutoComponent } from 'src/app/pages/empresa/produto/cadastrar-produto/cadastrar-produto.component';
import { FuncionalidadeFolder } from '../funcionalidade-folder/funcionalidade-folder';
import { Channels } from 'src/environments/channels';

export const ProdutoFolder = {
    label: 'Produtos',
    routerLink: 'prod/listaproduto',
    path: 'prod',
    component: OutletComponent,
    crud: true,
    selectedResource: Channels.pages.cadastro.empresa.produto,
    required: {
        required_list: [
            { channel: Channels.pages.cadastro.empresa.fornecedor, msg: 'Selecione um fornecedor!', redirect: 'cadastro/empresa/fornec/listafornecedor' }
        ]
    },
    children: [
        { label: 'Lista Produtos', routerLink: 'listaproduto', path: 'listaproduto', component: ListaProdutoComponent, crudList: true },
        { label: 'Cadastro Produto', routerLink: 'cadastroproduto', path: 'cadastroproduto', component: CadastrarProdutoComponent, crudForm: true },
        { path: '**', pathMatch: 'full', redirectTo: 'listaproduto' }
    ]
}