import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from 'primeng/api';
import { InfoContentComponent } from './components/info-content/info-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InicioComponent,
    ListComponent,
    InfoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabMenuModule,
    InputTextModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    CardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
