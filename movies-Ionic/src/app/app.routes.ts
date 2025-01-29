import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'detalles/:titulo',
    loadComponent: () => import('./pages/detalles/detalles.page').then( m => m.DetallesPage)
  },
];
