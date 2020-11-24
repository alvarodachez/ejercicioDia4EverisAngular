import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListComponent } from './components/list/list.component';
import { InfoContentComponent } from './components/info-content/info-content.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'search/:title',
    component: ListComponent
  },
  {
    path: 'search/:title/:id',
    component: InfoContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
