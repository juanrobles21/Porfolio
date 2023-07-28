import { ContenedorModule } from './../contenedor/contenedor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicoRoutingModule } from './publico-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DjangoRestauranteComponent } from './django-restaurante/django-restaurante.component';
import { DjangoComicComponent } from './django-comic/django-comic.component';
import { ReactGuiaComponent } from './react-guia/react-guia.component';
import { ReactAutoBochicaComponent } from './react-auto-bochica/react-auto-bochica.component';
import { AngularMicorralitoComponent } from './angular-micorralito/angular-micorralito.component';
import { AspSaborArteComponent } from './asp-sabor-arte/asp-sabor-arte.component';
import { ReactChatBotComponent } from './react-chat-bot/react-chat-bot.component';
import { PyGameOfLifeComponent } from './py-game-of-life/py-game-of-life.component';
import { JsMokeponComponent } from './js-mokepon/js-mokepon.component';

@NgModule({
  declarations: [InicioComponent, ErrorComponent, DjangoRestauranteComponent, DjangoComicComponent, ReactGuiaComponent, ReactAutoBochicaComponent, AngularMicorralitoComponent, AspSaborArteComponent, ReactChatBotComponent, PyGameOfLifeComponent, JsMokeponComponent],
  imports: [
    CommonModule,
    PublicoRoutingModule,

    FormsModule,
    ToastrModule.forRoot(),
    ContenedorModule,
  ],
})
export class PublicoModule {}
