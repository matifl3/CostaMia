import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home-page').then((m) => m.HomePage),
  },
  {
    path: 'casas',
    loadComponent: () => import('./pages/casas/casas-page').then((m) => m.CasasPage),
  },
  {
    path: 'casas/:id',
    loadComponent: () => import('./pages/casa-detail/casa-detail-page').then((m) => m.CasaDetailPage),
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros-page').then((m) => m.NosotrosPage),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto-page').then((m) => m.ContactoPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];