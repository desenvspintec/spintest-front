import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../routes/authguard/auth.guard';
import { Project } from 'src/environments/project';




function setCanActivate(page){
    page['canActivate'] = [AuthGuard];
    if (page.children){
        page.children.forEach(pg =>{
            setCanActivate(pg);
        });
    }
}


let project = Project;
project.pages.forEach(page =>{
    setCanActivate(page);
});



const appRoutes: Routes = project.pages;
console.log(appRoutes);
/*const appRoutes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'empresas', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'projetosdeteste', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'planosdeteste', component: HomeComponent, canActivate: [AuthGuard]},
    {path:'**',redirectTo:'dashboard', pathMatch: 'full' }
];*/

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});