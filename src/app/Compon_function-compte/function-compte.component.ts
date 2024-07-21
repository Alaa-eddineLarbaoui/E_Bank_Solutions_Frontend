import {Component, OnInit} from '@angular/core';
import {Compte} from "../modeles/compte";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompteService} from "../service/compte.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-function-compte',
  templateUrl: './function-compte.component.html',
  styleUrls: ['./function-compte.component.css']
})
export class FunctionCompteComponent implements OnInit{

  ListofCompte: Compte[] = [];

  AddComptform!: FormGroup;
  userId !: any
  constructor(private fb: FormBuilder, private compService: CompteService , private rout :ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.rout.snapshot.paramMap.get('id')
    this.Getcomptes()

  }



  //function get Comptes  *****************************************************************
  Getcomptes( ): void {
    this.compService.GetAllCompteOfsUer(this.userId).subscribe((data: Compte[]) => {
      this.ListofCompte = data;
    });
  }

}
