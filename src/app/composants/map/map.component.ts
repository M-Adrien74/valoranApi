import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Json} from "../../modeles/json";
import {ApiService} from "../../services/api.service";
import {Map} from "../../modeles/map";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  json: Observable<Json<Map>>

  constructor(
    private api: ApiService,
  ) {
    this.json = this.api.getMap()
  }


}

