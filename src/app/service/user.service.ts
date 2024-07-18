import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../modeles/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api : string = "http://localhost:8081/"
  constructor(private http:HttpClient) { }
  Adduser(formdata:User){
    return this.http.post(this.api+ 'signup',formdata)
}
  GetAllUsers(){
    return this.http.get<User[]>(this.api + 'user/getAll')
  }
}
