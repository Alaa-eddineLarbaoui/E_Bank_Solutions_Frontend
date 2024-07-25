import {AccountType} from "./account-type";
import {User} from "./user";

export interface Compte{
  accountId:number
  account_number:string
  account_type : AccountType;
  solde:number
  date_creation:string
  accountClosed:boolean
  raisonClosing:string
  user  : User

}
