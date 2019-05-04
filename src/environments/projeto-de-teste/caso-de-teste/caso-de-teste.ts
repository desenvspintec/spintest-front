import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';
import { CadastrarCasoDeTesteComponent } from 'src/app/pages/projeto-de-teste/caso-de-teste/cadastrar-caso-de-teste/cadastrar-caso-de-teste.component';
import { ListaCasoDeTesteComponent } from 'src/app/pages/projeto-de-teste/caso-de-teste/lista-caso-de-teste/lista-caso-de-teste.component';

export const CasoTesteFolder = {
    label: 'Casos de teste',
    routerLink: 'caso/listacaso',
    path: 'caso',
    component: OutletComponent,
    crud: true,
    selectedResource: Channels.pages.cadastro.projeto_de_teste.caso_de_teste,
    canActivate: [AuthGuard],
    required: {
        required_list: [
            {
                channel: Channels.pages.cadastro.projeto_de_teste.suite_de_teste,
                msg: 'Selecione a suite de teste.',
                redirect: 'projetodeteste/projeto/suite/listasuite'
            }
        ]
    },
    children: [
        {
            label: 'Lista de Caso',
            routerLink: 'listacaso',
            path: 'listacaso',
            component: ListaCasoDeTesteComponent,
            canActivate: [AuthGuard],
            crudList: true
        },
        {
            label: 'Cadastro Caso',
            routerLink: 'cadastrocaso',
            path: 'cadastrocaso',
            component: CadastrarCasoDeTesteComponent,
            canActivate: [AuthGuard],
            crudForm: true
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listacaso' }
    ]
}