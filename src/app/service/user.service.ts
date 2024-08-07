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
  DeleteUser(id : number){
    return this.http.delete<User>(this.api+"user/delete/"+id)
  }
  public updateUser(id:any,inputData:User){
    return this.http.put(this.api+"user/update/"+id,inputData)
  }

}
