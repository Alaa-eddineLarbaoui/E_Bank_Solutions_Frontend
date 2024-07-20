import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./Component of User/user.component";
import {CompteComponent} from "./Component of compte/compte.component";

const routes: Routes = [
  {path:"add_user",component:UserComponent},
  {path:"get_user",component:UserComponent},
  {path:"add_compte/:id",component:CompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
