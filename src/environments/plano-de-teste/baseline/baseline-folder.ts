import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { Channels } from 'src/environments/channels';
import { ListaBaselineComponent } from 'src/app/pages/plano-de-teste/baseline/lista-baseline/lista-baseline.component';
import { CadastrarBaselineComponent } from 'src/app/pages/plano-de-teste/baseline/cadastrar-baseline/cadastrar-baseline.component';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';

export const BaseLineFolder = {
    label: 'Baseline',
    path: 'base',
    routerLink: 'base/listabaseline',
    component: OutletComponent,
    crud: true,
    canActivate: [AuthGuard],
    selectedResource: Channels.pages.planejamento.plano_de_teste.baseline,
    // required: {
    //     required_list: [
    //         {
    //             channel: Channels.pages.planejamento.plano_de_teste.plano_de_teste,
    //             msg: 'Selecione um plano de teste.',
    //             redirect: 'planejamento/planodeteste/plteste/listaplanodeteste'
    //         }
    //     ]
    // },
    children: [
        {
            label: 'Lista de Baseline',
            routerLink: 'listabaseline',
            path: 'listabaseline',
            component: ListaBaselineComponent,
            canActivate: [AuthGuard],
            crudList: true,
        },
        {
            label: 'Cadastro Baseline',
            routerLink: 'cadastrobaseline',
            path: 'cadastrobaseline',
            component: CadastrarBaselineComponent,
            canActivate: [AuthGuard],
            crudForm: true
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listabaseline' }
    ]
}