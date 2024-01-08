import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/layout/layout.component').then(c => c.LayoutComponent),
    },
    {
        path: 'simple/form',
        loadComponent: () =>
            import('./components/simple-response/form-simple-response/form-simple-response.component').then(c => c.FormSimpleResponseComponent),
    },
    {
        path: 'simple/form/:id',
        loadComponent: () =>
            import('./components/simple-response/form-simple-response/form-simple-response.component').then(c => c.FormSimpleResponseComponent),
    },
    {
        path: 'simple/list',
        loadComponent: () =>
            import('./components/simple-response/list-simple-response/list-simple-response.component').then(c => c.ListSimpleResponseComponent),
    },
    {
        path: 'threaded/form',
        loadComponent: () =>
            import('./components/threaded-response/form-threaded-response/form-threaded-response.component').then(c => c.FormThreadedResponseComponent),
    },
    {
        path: 'threaded/list',
        loadComponent: () =>
            import('./components/threaded-response/list-threaded-response/list-threaded-response.component').then(c => c.ListThreadedResponseComponent),
    },
];
