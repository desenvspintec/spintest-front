import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';

import { ListaCasoPlanejadoComponent } from 'src/app/pages/plano-de-teste/caso-planejado/lista-caso-planejado/lista-caso-planejado.component';

export const CasoPlanejadoFolder =  {
    label: 'Casos planejados',
    path: 'caso',
    routerLink: 'caso/listacasoplanejado',
    component: OutletComponent,
    crud: true,
    canActivate: [AuthGuard],
    selectedResource: Channels.pages.planejamento.plano_de_teste.caso_planejado,
    children: [
        { 
            label: 'Lista de casos planejados', 
            routerLink: 'listacasoplanejado', 
            path: 'listacasoplanejado', 
            component: ListaCasoPlanejadoComponent,
            canActivate: [AuthGuard], 
            crudList: true,
        },
        // { 
        //     label: 'Cadastro de Plano de Teste', 
        //     routerLink: 'cadastroplanodeteste', 
        //     path: 'cadastroplanodeteste', 
        //     component: CadastrarPlanoDeTesteComponent,
        //     canActivate: [AuthGuard], 
        //     crudForm: true
        // },
        { path: '**', pathMatch: 'full', redirectTo: 'listacasoplanejado' }
    ]
}