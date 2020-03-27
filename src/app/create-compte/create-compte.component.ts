import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { Compte } from '../models/Compte';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit {
listCompte: Compte[] = []
listUser: User[] = []
newCompte : Compte =new Compte()
  constructor(private compteservice:CompteService,private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getAll().subscribe(
      data=>{
        this.listUser=data;
      }
    )
}
  createCompte(){
    this.compteservice.create(this.newCompte).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
