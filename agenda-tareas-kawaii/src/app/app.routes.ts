import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'nueva-tarea',
    loadComponent: () => import('./pages/nueva-tarea/nueva-tarea.page').then( m => m.NuevaTareaPage)
  },
  {
    path: 'buscar-tareas',
    loadComponent: () => import('./pages/buscar-tareas/buscar-tareas.page').then( m => m.BuscarTareasPage)
  },
  {
    path: 'todas-tareas',
    loadComponent: () => import('./pages/todas-tareas/todas-tareas.page').then( m => m.TodasTareasPage)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./pages/acerca-de/acerca-de.page').then( m => m.AcercaDePage)
  },
  {
    path: 'tareas-archivadas',
    loadComponent: () => import('./pages/tareas-archivadas/tareas-archivadas.page').then( m => m.TareasArchivadasPage)
  },
  {
    path: 'tareas-borradas',
    loadComponent: () => import('./pages/tareas-borradas/tareas-borradas.page').then( m => m.TareasBorradasPage)
  },
];
