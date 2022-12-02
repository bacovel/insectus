import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MotivatieComponent } from './pages/motivatie/motivatie.component';
import { InsectusComponent } from './pages/insectus/insectus.component';
import { AnalizaComponent } from './pages/analiza/analiza.component';
import { ClientiComponent } from './pages/clienti/clienti.component';
import { PlanuriComponent } from './pages/planuri/planuri.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MotivatieComponent,
    InsectusComponent,
    AnalizaComponent,
    ClientiComponent,
    PlanuriComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
