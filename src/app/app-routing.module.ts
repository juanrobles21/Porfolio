import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorDashComponent } from './modulos/contenedor/dash/contenedor-dash/contenedor-dash.component';
import { RUTAS_DASHSCAPE } from './utilidades/rutas/dash-rutas';
import { ErrorComponent } from './modulos/publico/error/error.component';

const routes: Routes = [
  { path: '', component: ContenedorDashComponent, children: RUTAS_DASHSCAPE },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
