import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Component of User/user.component';
import { CartebankComponent } from './Component of cartebank/cartebank.component';
import { CompteComponent } from './add-update-compte/compte.component';
import { BeneficiaireComponent } from './Component of beneficiaire/beneficiaire.component';
import { TransactionComponent } from './Component of transaction/transaction.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateUserComponent } from './add/update-user/update-user.component';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { FunctionCompteComponent } from './Compon_function-compte/function-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CartebankComponent,
    CompteComponent,
    BeneficiaireComponent,
    TransactionComponent,
    UpdateUserComponent,
    AddUpdateUserComponent,
    FunctionCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
