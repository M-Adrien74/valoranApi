import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Json} from "../modeles/json";
import {Personnage} from "../modeles/personnage";
import {Map} from "../modeles/map"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL: string = "https://valorant-api.com/v1/agents";
  private URLMAP: string = "https://valorant-api.com/v1/maps";

  constructor(
    private http: HttpClient,
  ) {
  }

  public getPersonnage(): Observable<Json<Personnage>> {
    return this.http.get<Json<Personnage>>(this.URL);
  }

  public getMap(): Observable<Json<Map>> {
    return this.http.get<Json<Map>>(this.URLMAP);
  }
}
