export const Menu = {
    items: [{
        label: 'Dashboard',
        routerLink: 'dash',
        items: [
            { label: 'Dashboard', icon: 'pi pi-spinner text-red', routerLink: 'dash/dashboard' }
        ]
    },
    {
        label: 'Cadastros',
        routerLink: 'cadastro',
        items: [
            { label: 'Empresa', icon: 'pi pi-th-large text-purple', routerLink: 'cadastro/empresa' },
            { label: 'Projetos de Teste', icon: 'pi pi-sitemap', routerLink: 'projetodeteste' }
        ]
    }, {
        label: 'Planejamento',
        routerLink: 'planejamento',
        items: [
            { label: 'Planos de Teste', icon: 'pi pi-folder-open text-green', routerLink: 'planejamento/planodeteste' }
        ]
    }]
}