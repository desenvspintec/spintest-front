import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { Channels } from 'src/environments/channels';
import { ListaPlanoDeTesteComponent } from 'src/app/pages/plano-de-teste/plano-de-teste/lista-plano-de-teste/lista-plano-de-teste.component';
import { CadastrarPlanoDeTesteComponent } from 'src/app/pages/plano-de-teste/plano-de-teste/cadastrar-plano-de-teste/cadastrar-plano-de-teste.component';

export const PlanoDeTesteFolder =  {
    label: 'Plano de teste',
    path: 'plteste',
    routerLink: 'plteste/listaplanodeteste',
    component: OutletComponent,
    crud: true,
    selectedResource: Channels.pages.planejamento.plano_de_teste.plano_de_teste,
    children: [
        { 
            label: 'Lista de Plano de Teste', 
            routerLink: 'listaplanodeteste', 
            path: 'listaplanodeteste', 
            component: ListaPlanoDeTesteComponent, 
            crudList: true,
        },
        { 
            label: 'Cadastro de Plano de Teste', 
            routerLink: 'cadastroplanodeteste', 
            path: 'cadastroplanodeteste', 
            component: CadastrarPlanoDeTesteComponent, 
            crudForm: true
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listaplanodeteste' }
    ]
}