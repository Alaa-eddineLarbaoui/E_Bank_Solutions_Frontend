import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { CompteService } from "../service/compte.service";
import { Compte } from "../modeles/compte";
import {ActivatedRoute} from "@angular/router";
import {User} from "../modeles/user";

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  ListofCompte: Compte[] = [];

  AddComptform!: FormGroup;
  userId !: any
  constructor(private fb: FormBuilder, private compService: CompteService , private rout :ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.rout.snapshot.paramMap.get('id')
    this.Getcomptes();


    this.AddComptform = this.fb.group({
      accountId: [0],
      account_type: [''],
      solde: [''],
      date_creation: [''],
      status: [''],
      account_number: [''],
      raisonClosing: [''],
      accountClosed: [false],
      user: this.fb.group({
        userId: [0],
        nom: [''],
        password: [''],
        age: [0]
      })
    });

  }



//function ADD Compte *****************************************************************
  saveCompte(): void {
    const formValue = this.AddComptform.value;
    const compte: Compte = {
      accountId: formValue.accountId,
      account_type: formValue.account_type,
      solde: formValue.solde,
      date_creation: formValue.date_creation,
      account_number: formValue.account_number,
      raisonClosing: formValue.raisonClosing,
      accountClosed: formValue.accountClosed,
      user: {
        userId: formValue.user.userId,
        nom: formValue.user.nom,
        password: formValue.user.password,
        age: formValue.user.age,
        listeCompte: []
      }
    };

    this.compService.Addcompte(compte, this.userId).subscribe(
      response => {
        console.log('Compte added successfully', response);
        // Code pour mettre à jour l'interface utilisateur après l'ajout
        // Par exemple, rafraîchir la liste des comptes
      },
      error => {
        console.error('There was an error!', error);
      }
    );
    this.AddComptform=this.fb.group({
      solde:'',
      account_type:'',

    })
  }


  //function get Comptes  *****************************************************************
  Getcomptes( ): void {
    this.compService.GetAllCompteOfsUer(this.userId).subscribe((data: Compte[]) => {
      this.ListofCompte = data;
    });
  }

}
