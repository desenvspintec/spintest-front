import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { Channels } from 'src/environments/channels';
import { ListaBaselineComponent } from 'src/app/pages/plano-de-teste/baseline/lista-baseline/lista-baseline.component';
import { CadastrarBaselineComponent } from 'src/app/pages/plano-de-teste/baseline/cadastrar-baseline/cadastrar-baseline.component';

export const BaseLineFolder =  {
    label: 'Baseline',
    path: 'base',
    routerLink: 'base/listabaseline',
    component: OutletComponent,
    crud: true,
    selectedResource: Channels.pages.planejamento.plano_de_teste.baseline,
    children: [
        { 
            label: 'Lista de Baseline', 
            routerLink: 'listabaseline', 
            path: 'listabaseline', 
            component: ListaBaselineComponent, 
            crudList: true,
        },
        { 
            label: 'Cadastro Baseline', 
            routerLink: 'cadastrobaseline', 
            path: 'cadastrobaseline', 
            component: CadastrarBaselineComponent, 
            crudForm: true
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listabaseline' }
    ]
}