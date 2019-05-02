import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { ListaEmpresaComponent } from 'src/app/pages/empresa/empresa/lista-empresa/lista-empresa.component';
import { CadastrarEmpresaComponent } from 'src/app/pages/empresa/empresa/cadastrar-empresa/cadastrar-empresa.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';

export const EmpresaFolder =  {
    label: 'Empresa',
    path: 'emp',
    routerLink: 'emp/listaempresa',
    component: OutletComponent,
    crud: true,
    selectedResource: Channels.pages.cadastro.empresa.empresa,
    canActivate: [AuthGuard],
    children: [
        { 
            label: 'Lista de Empresas', 
            routerLink: 'listaempresa', 
            path: 'listaempresa', 
            canActivate: [AuthGuard],
            component: ListaEmpresaComponent, 
            crudList: true,
        },
        { 
            label: 'Cadastro Empresa', 
            routerLink: 'cadastroempresa', 
            path: 'cadastroempresa', 
            canActivate: [AuthGuard],
            component: CadastrarEmpresaComponent, 
            crudForm: true
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listaempresa' }
    ]
}