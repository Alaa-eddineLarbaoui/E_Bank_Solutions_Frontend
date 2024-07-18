import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../modeles/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{

  GetUser: User[] = [];

  Adduserform!:FormGroup
  ngOnInit(): void {
    this.loadLectures();

    this.Adduserform=this.fb.group({
      nom:'',
      password:'',
      age:'',
    })
  }
constructor( private userService:UserService,private fb:FormBuilder) {
}
  loadLectures(): void {
    this.userService.GetAllUsers().subscribe((data: User[]) => {
      this.GetUser = data;
    });
  }
  saveUser() {
    const FormValue=this.Adduserform.value;
    const user : User={
      userId:0,
      nom : FormValue.nom,
      password : FormValue.password,
      age : FormValue.age,
      listeCompte:[]
    }
    console.log(FormValue.nom)
    console.log(FormValue.password)
    console.log(FormValue.age)
  this.userService.Adduser(user).subscribe()
    this.Adduserform=this.fb.group({
      nom:'',
      password:'',
      age:'',
    })
  }
}
