import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';

import { ListaProjetoDeTesteComponent } from 'src/app/pages/projeto-de-teste/projeto-de-teste/lista-projeto-de-teste/lista-projeto-de-teste.component';
import { CadastrarProjetoDeTesteComponent } from 'src/app/pages/projeto-de-teste/projeto-de-teste/cadastrar-projeto-de-teste/cadastrar-projeto-de-teste.component';

export const ProjetoTesteFolder =  {
    label: 'Projeto',
    path: 'pro',
    routerLink: 'pro/listaprojetos',
    component: OutletComponent,
    crud: true,
    selectedResource: Channels.pages.cadastro.projeto_de_teste.projeto_de_teste,
    canActivate: [AuthGuard],
    children: [
        { 
            label: 'Lista de Projeto', 
            routerLink: 'listaprojeto', 
            path: 'listaprojeto', 
            canActivate: [AuthGuard],
            component: ListaProjetoDeTesteComponent, 
            crudList: true,
        },
        { 
            label: 'Cadastro Projeto', 
            routerLink: 'cadastroprojeto', 
            path: 'cadastroprojeto', 
            canActivate: [AuthGuard],
            component: CadastrarProjetoDeTesteComponent, 
            crudForm: true
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listaprojeto' }
    ]
}