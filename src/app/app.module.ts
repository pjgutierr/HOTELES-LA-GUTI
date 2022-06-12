import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ServicioshotelComponent } from './servicioshotel/servicioshotel.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioreservaComponent } from './formularioreserva/formularioreserva.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    HabitacionesComponent,
    ServicioshotelComponent,
    FooterComponent,
    FormularioreservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
