import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';
import { ListaSuiteDeTesteComponent } from 'src/app/pages/projeto-de-teste/suite-de-teste/lista-suite-de-teste/lista-suite-de-teste.component';
import { CadastrarSuiteDeTesteComponent } from 'src/app/pages/projeto-de-teste/suite-de-teste/cadastrar-suite-de-teste/cadastrar-suite-de-teste.component';

export const SuiteTesteFolder = {
    label: 'Suite de teste',
    routerLink: 'suite/listasuite',
    path: 'suite',
    component: OutletComponent,
    crud: true,
    canActivate: [AuthGuard],
    selectedResource: Channels.pages.cadastro.projeto_de_teste.suite_de_teste,
    required: {
        required_list: [
            {
                channel: Channels.pages.cadastro.projeto_de_teste.projeto_de_teste,
                msg: 'Selecione um projeto.',
                redirect: 'projetodeteste/projeto/pro/listaprojeto'
            }
        ]
    },
    children: [
        {
            label: 'Lista de suites',
            routerLink: 'listasuite',
            path: 'listasuite',
            canActivate: [AuthGuard],
            component: ListaSuiteDeTesteComponent,
            crudList: true
        },

        {
            label: 'Cadastro de suite',
            routerLink: 'cadastrosuite',
            path: 'cadastrosuite',
            component: CadastrarSuiteDeTesteComponent,
            canActivate: [AuthGuard],
            crudForm: true
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listasuite' }
    ]
}