import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Compte} from "../modeles/compte";
import {Cartebank} from "../modeles/cartebank";

@Injectable({
  providedIn: 'root'
})


export class CartebankService {
  private api : string = "http://localhost:8081/Carte/"
  constructor(private http:HttpClient) { }

  GetCarte(Id : number){
    return this.http.get<Cartebank>(this.api + `getAll/`+Id);
  }

}
