import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../modeles/user";
import {Compte} from "../modeles/compte";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompteService {


  private api : string = "http://localhost:8081/account/"
  constructor(private http:HttpClient) { }
  Addcompte(formdata: Compte, Iduser: number) {
    return this.http.post(this.api + `addAccount/${Iduser}`, formdata);
  }



 // GetAllCompteOfsUer(Id: number): Observable<Compte[]> {
  //  return this.http.get<Compte[]>(`${this.api}/getAll/${Id}`);
  //}
  GetAllCompteOfsUer(Id : number){
    return this.http.get<Compte[]>(this.api + `getAll/${Id}`);
  }
 // DeleteCompte(id : number){
 //   return this.http.delete<User>(this.api+"user/delete/"+id)
//  }
}
