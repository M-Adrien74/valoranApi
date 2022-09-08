import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PersonnagesComponent} from "./composants/personnages/personnages.component";
import {MapsComponent} from "./composants/maps/maps.component";
import {TitreComponent} from "./composants/titre/titre.component";

const routes: Routes = [
  {path: "", redirectTo: "personnages", pathMatch: "full"},
  {path: "personnages", component: PersonnagesComponent},
  {path: "maps", component: MapsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
