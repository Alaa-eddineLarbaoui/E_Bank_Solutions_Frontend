import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CartebankComponent } from './cartebank/cartebank.component';
import { CompteComponent } from './compte/compte.component';
import { BeneficiaireComponent } from './beneficiaire/beneficiaire.component';
import { TransactionComponent } from './transaction/transaction.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
