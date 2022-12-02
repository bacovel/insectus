import { ContactComponent } from './pages/contact/contact.component';
import { PlanuriComponent } from './pages/planuri/planuri.component';
import { ClientiComponent } from './pages/clienti/clienti.component';
import { AnalizaComponent } from './pages/analiza/analiza.component';
import { InsectusComponent } from './pages/insectus/insectus.component';
import { MotivatieComponent } from './pages/motivatie/motivatie.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'motivatie', component: MotivatieComponent },
  { path: 'insectus', component: InsectusComponent },
  { path: 'analiza', component: AnalizaComponent },
  { path: 'clienti', component: ClientiComponent },
  { path: 'planuri', component: PlanuriComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
