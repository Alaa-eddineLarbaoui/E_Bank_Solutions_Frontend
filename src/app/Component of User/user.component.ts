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
    this.Getusers();

    this.Adduserform=this.fb.group({
      nom:'',
      password:'',
      age:'',
    })
  }
constructor( private userService:UserService,private fb:FormBuilder) {
}
// function GET USERS  ****************************************************************
  Getusers(): void {
    this.userService.GetAllUsers().subscribe((data: User[]) => {
      this.GetUser = data;
    });
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

  ////
  //private delete = document.getElementById("delete")
 // deleting(){
    // @ts-ignore
 //   document.addEventListener("click", ()=>{
      // @ts-ignore
 //     let id : any = this.delete.value;
   //   this.userService.DeleteUser(id);
//    })
 // }



// Function to delete user ***********************************************************************
deleteCustomer(userId: number): void {
  this.userService.DeleteUser(userId).subscribe(
    response => {
      console.log('User deleted successfully', response);
      this.GetUser = this.GetUser.filter(user => user.userId !== userId);
    },
    error => {
      console.error('There was an error!', error);
    }
  );
}

}
