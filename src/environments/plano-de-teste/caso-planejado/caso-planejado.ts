import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';

import { CadastrarCasoPlanejadoComponent } from 'src/app/pages/plano-de-teste/caso-planejado/cadastrar-caso-planejado/cadastrar-caso-planejado.component';

export const CasoPlanejadoFolder =  {
    label: 'Casos planejados',
    path: 'caso',
    routerLink: 'caso/cadastrarcasoplanejado',
    component: OutletComponent,
    crud: true,
    canActivate: [AuthGuard],
    selectedResource: Channels.pages.planejamento.plano_de_teste.caso_planejado,
    children: [
        { 
            label: 'Casos planejados', 
            routerLink: 'cadastrarcasoplanejado', 
            path: 'cadastrarcasoplanejado', 
            component: CadastrarCasoPlanejadoComponent,
            canActivate: [AuthGuard], 
            crudList: true,
        },
        { path: '**', pathMatch: 'full', redirectTo: 'cadastrarcasoplanejado' }
    ]
}