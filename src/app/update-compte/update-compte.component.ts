import { Component, OnInit } from '@angular/core';
import { Compte } from '../models/Compte';
import { User } from '../models/user';
import { CompteService } from '../compte.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {
Compte: Compte =new Compte()
listUser :User[]=[]
idcompteURL:number
  constructor(private userservice : UserService,private route:ActivatedRoute, private compteservice: CompteService) { 
    this.idcompteURL = parseInt(this.route.snapshot.paramMap.get('id'))
  this.userservice.getAll().subscribe(
    data=>{
      this.listUser = data;
    }
  )
  }

  ngOnInit(): void {
    console.log(this.idcompteURL);
    this.compteservice.getbyid(this.idcompteURL).subscribe(
      data=>(
        this.Compte=data
      )
    )
  }
  updateCompte(id:number , compte:Compte){
    this.compteservice.update(id,compte).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
  compareFn(user1: User, user2: User) {
    return user1 && user2 ? user1.iduser === user2.iduser : user1 === user2;
}
}
