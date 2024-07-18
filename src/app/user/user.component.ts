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
  Adduserform!:FormGroup
  ngOnInit(): void {
    this.Adduserform=this.fb.group({
      nom:'',
      password:'',
      age:'',
    })
  }
constructor( private test:UserService,private fb:FormBuilder) {
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
  this.test.Adduser(user).subscribe()
    this.Adduserform=this.fb.group({
      nom:'',
      password:'',
      age:'',
    })
  }
}
