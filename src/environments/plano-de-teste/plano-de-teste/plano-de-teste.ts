import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { Channels } from 'src/environments/channels';
import { ListaPlanoDeTesteComponent } from 'src/app/pages/plano-de-teste/plano-de-teste/lista-plano-de-teste/lista-plano-de-teste.component';
import { CadastrarPlanoDeTesteComponent } from 'src/app/pages/plano-de-teste/plano-de-teste/cadastrar-plano-de-teste/cadastrar-plano-de-teste.component';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';

export const PlanoDeTesteFolder =  {
    label: 'Planos de teste',
    path: 'plteste',
    routerLink: 'plteste/listaplanodeteste',
    component: OutletComponent,
    crud: true,
    canActivate: [AuthGuard],
    selectedResource: Channels.pages.planejamento.plano_de_teste.plano_de_teste,
    children: [
        { 
            label: 'Lista de Plano de Teste', 
            routerLink: 'listaplanodeteste', 
            path: 'listaplanodeteste', 
            component: ListaPlanoDeTesteComponent,
            canActivate: [AuthGuard], 
            crudList: true,
        },
        { 
            label: 'Cadastro de Plano de Teste', 
            routerLink: 'cadastroplanodeteste', 
            path: 'cadastroplanodeteste', 
            component: CadastrarPlanoDeTesteComponent,
            canActivate: [AuthGuard], 
            crudForm: true
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listaplanodeteste' }
    ]
}