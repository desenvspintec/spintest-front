import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';
import { CadastrarCasoDeTesteComponent } from 'src/app/pages/projeto-de-teste/caso-de-teste/cadastrar-caso-de-teste/cadastrar-caso-de-teste.component';
import { ListaCasoDeTesteComponent } from 'src/app/pages/projeto-de-teste/caso-de-teste/lista-caso-de-teste/lista-caso-de-teste.component';
import { ListaPassoDeTesteComponent } from 'src/app/pages/projeto-de-teste/passo-de-teste/lista-passo-de-teste/lista-passo-de-teste.component';
import { CadastrarPassoDeTesteComponent } from 'src/app/pages/projeto-de-teste/passo-de-teste/cadastrar-passo-de-teste/cadastrar-passo-de-teste.component';

export const PassoTesteFolder = {
    label: 'Passos de teste',
    routerLink: 'passo/listapasso',
    path: 'passo',
    component: OutletComponent,
    crud: true,
    selectedResource: Channels.pages.cadastro.projeto_de_teste.passo_de_teste,
    canActivate: [AuthGuard],
    required: {
        required_list: [
            {
                channel: Channels.pages.cadastro.projeto_de_teste.caso_de_teste,
                msg: 'Selecione o caso de teste.',
                redirect: 'projetodeteste/projeto/caso/listacaso'
            }
        ]
    },
    children: [
        {
            label: 'Lista de Passo',
            routerLink: 'listapasso',
            path: 'listapasso',
            component: ListaPassoDeTesteComponent,
            canActivate: [AuthGuard],
            crudList: true
        },
        {
            label: 'Cadastro Passo',
            routerLink: 'cadastropasso',
            path: 'cadastropasso',
            component: CadastrarPassoDeTesteComponent,
            canActivate: [AuthGuard],
            crudForm: true
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listapasso' }
    ]
}