import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Component of User/user.component';
import { CartebankComponent } from './Component of cartebank/cartebank.component';
import { CompteComponent } from './Component of compte/compte.component';
import { BeneficiaireComponent } from './Component of beneficiaire/beneficiaire.component';
import { TransactionComponent } from './Component of transaction/transaction.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CartebankComponent,
    CompteComponent,
    BeneficiaireComponent,
    TransactionComponent
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
