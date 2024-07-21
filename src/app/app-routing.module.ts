import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./Component of User/user.component";
import {CompteComponent} from "./add-update-compte/compte.component";
import {AddUpdateUserComponent} from "./add-update-user/add-update-user.component";
import {FunctionCompteComponent} from "./Compon_function-compte/function-compte.component";

const routes: Routes = [
  {path:"add_user",component:AddUpdateUserComponent},
  {path:"get_user",component:UserComponent},
  {path:"add_compte/:id",component:CompteComponent},

  //{path:"add_compte",component:CompteComponent}
  {path:"get_Compte/:id" , component:FunctionCompteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
