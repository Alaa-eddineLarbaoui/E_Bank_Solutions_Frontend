import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {CompteService} from "../service/compte.service";
import {ActivatedRoute} from "@angular/router";
import {CartebankService} from "../service/cartebank.service";
import {Cartebank} from "../modeles/cartebank";



@Component({
  selector: 'app-cartebank',
  templateUrl: './cartebank.component.html',
  styleUrls: ['./cartebank.component.css']
})
export class CartebankComponent implements OnInit{
  accountId !: any
  carte :any
  constructor(private fb: FormBuilder, private carteservice: CartebankService , private rout :ActivatedRoute) { }

  ngOnInit(): void {
    this.accountId = this.rout.snapshot.paramMap.get('id')


  }



}
