import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../modeles/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api : string = "http://localhost:8081/signup"
  constructor(private http:HttpClient) { }
Adduser(formdata:User){
    return this.http.post(this.api,formdata)
}

}
