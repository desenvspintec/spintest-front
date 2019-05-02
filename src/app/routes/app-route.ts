import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../routes/authguard/auth.guard';
import { Project } from 'src/environments/project';

/*console.log('setCanActivate');
function setCanActivate(page){
    console.log('setCanActivate');
    page['canActivate'] = [AuthGuard];
    if (page.children){
        page.children.forEach(pg =>{
            setCanActivate(pg);
        });
    }
}

let project = Project;
console.log(project);
project.pages.forEach(page =>{
    setCanActivate(page);
});*/
let project = Project;
const appRoutes: Routes = project.pages;

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});