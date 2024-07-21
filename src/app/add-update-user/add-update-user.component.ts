import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../modeles/user";

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css']
})


export class AddUpdateUserComponent implements OnInit{



  Adduserform!:FormGroup
  ngOnInit(): void {


    this.Adduserform=this.fb.group({
      nom:'',
      password:'',
      age:'',
    })
  }
  constructor( private userService:UserService,private fb:FormBuilder) {
  }



  //function ADD USER *****************************************************************
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

// For empty the inputs after adding *************************************************
    this.Adduserform=this.fb.group({
      nom:'',
      password:'',
      age:'',
    })
  }




// Function to update user ***********************************************************************


  updateUser() {
    const userData = {
      userId: this.Adduserform.value.userId,
      nom: this.Adduserform.value.nom,
      password: this.Adduserform.value.password,
      age: this.Adduserform.value.age
    };


  }}
