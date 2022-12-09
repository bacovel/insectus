import { NgModule, Component } from '@angular/core';
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
import { DovadaComponent } from './pages/dovada/dovada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material Angular
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

//import { MyLineChartComponent } from './components/footer/footer.component';

import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MotivatieComponent,
    InsectusComponent,
    AnalizaComponent,
    ClientiComponent,
    PlanuriComponent,
    ContactComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    DovadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }