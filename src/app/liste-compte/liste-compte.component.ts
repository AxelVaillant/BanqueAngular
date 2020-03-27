import { Component, OnInit } from '@angular/core';
import { Compte } from '../models/Compte';
import { CompteService } from '../compte.service';
import { User } from '../models/user';

@Component({
  selector: 'app-liste-compte',
  templateUrl: './liste-compte.component.html',
  styleUrls: ['./liste-compte.component.css']
})
export class ListeCompteComponent implements OnInit {
listCompte: Compte[]=[]
  constructor(private compteservice:CompteService) { }

  ngOnInit(): void {
    this.compteservice.getAll().subscribe(
      data=>{
        this.listCompte=data;
  })
  }
  getbyid(idcompte:number){
    this.compteservice.getbyid(idcompte).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  updateUser(id:number,compte:Compte){
    this.compteservice.update(id,compte).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
