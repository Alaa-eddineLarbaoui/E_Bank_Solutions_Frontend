import {Compte} from "./compte";


export interface User{
  userId:number
  nom:string
  password:string
  age:number
  listeCompte:Array<Compte>
}
