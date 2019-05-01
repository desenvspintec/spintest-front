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

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});