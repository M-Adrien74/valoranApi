import {Component} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Json} from "../../modeles/json";
import {Personnage} from "../../modeles/personnage";

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.scss']
})
export class PersonnagesComponent {
  json: Observable<Json<Personnage>>

  constructor(
    private api: ApiService,
  ) {
    this.json = this.api.getPersonnage()
  }

}
