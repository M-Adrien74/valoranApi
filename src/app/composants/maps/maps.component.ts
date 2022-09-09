import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Json} from "../../modeles/json";
import {Map} from "../../modeles/map"
import {ApiService} from "../../services/api.service";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {
  json: Observable<Json<Map>>
  voirplus: boolean = true

  constructor(
    private api: ApiService
  ) {
    this.json = this.api.getMap();
  }


  public voirPlus(): void {
    this.voirplus = !this.voirplus;
    
  }
}
