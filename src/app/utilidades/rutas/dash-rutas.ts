import { Routes } from '@angular/router';

export const RUTAS_DASHSCAPE: Routes = [
  {
    path: 'dash',
    loadChildren: () =>
      import('../../modulos/publico/publico.module').then(
        (m) => m.PublicoModule
      ),
  },
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
];
