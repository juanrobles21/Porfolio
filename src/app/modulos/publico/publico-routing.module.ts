import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { DjangoRestauranteComponent } from './django-restaurante/django-restaurante.component';
import { DjangoComicComponent } from './django-comic/django-comic.component';
import { ReactGuiaComponent } from './react-guia/react-guia.component';
import { ReactAutoBochicaComponent } from './react-auto-bochica/react-auto-bochica.component';
import { AngularMicorralitoComponent } from './angular-micorralito/angular-micorralito.component';
import { AspSaborArteComponent } from './asp-sabor-arte/asp-sabor-arte.component';
import { ReactChatBotComponent } from './react-chat-bot/react-chat-bot.component';
import { PyGameOfLifeComponent } from './py-game-of-life/py-game-of-life.component';
import { JsMokeponComponent } from './js-mokepon/js-mokepon.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'djangorestaunte', component: DjangoRestauranteComponent },
  { path: 'djangocomic', component: DjangoComicComponent },
  { path: 'reactguia', component: ReactGuiaComponent },
  { path: 'reactautobochica', component: ReactAutoBochicaComponent },
  { path: 'angularmicorralito', component: AngularMicorralitoComponent },
  { path: 'aspsaborarte', component: AspSaborArteComponent },
  { path: 'reactchatbot', component: ReactChatBotComponent },
  { path: 'pygameoflife', component: PyGameOfLifeComponent },
  { path: 'jsmokepon', component: JsMokeponComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicoRoutingModule {}
