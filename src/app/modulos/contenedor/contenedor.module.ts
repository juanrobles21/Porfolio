import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDashComponent } from './dash/menu-dash/menu-dash.component';
import { ContenedorDashComponent } from './dash/contenedor-dash/contenedor-dash.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuDashComponent, ContenedorDashComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuDashComponent, ContenedorDashComponent],
})
export class ContenedorModule {}
