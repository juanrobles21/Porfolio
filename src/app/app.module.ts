import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContenedorModule } from './modulos/contenedor/contenedor.module';
import { HttpClientModule } from '@angular/common/http';

//Services
import { CargarScriptsService } from './cargar-scripts.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ContenedorModule,
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
