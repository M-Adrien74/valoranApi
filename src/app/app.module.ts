import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnagesComponent } from './composants/personnages/personnages.component';
import { TitreComponent } from './composants/titre/titre.component';
import {HttpClientModule} from "@angular/common/http";
import { MapsComponent } from './composants/maps/maps.component';
import { MapComponent } from './composants/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnagesComponent,
    TitreComponent,
    MapsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
