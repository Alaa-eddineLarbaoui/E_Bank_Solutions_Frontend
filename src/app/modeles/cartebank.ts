import {Compte} from "./compte";

export interface Cartebank{

  idCarte:number
  numero:number
  dateExpiration:string
  typeCarte:string
  status:string
  compte:Compte

}
