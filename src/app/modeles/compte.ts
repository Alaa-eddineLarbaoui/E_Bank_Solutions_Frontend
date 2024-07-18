import {AccountType} from "../account-type";
import {User} from "./user";

export interface Compte{
  accountId:number
  account_type : AccountType;
  solde:number
  date_creation:string
  status:string
  account_number:string
  raisonClosing:string
  accountClosed:boolean
  user  : User

}
