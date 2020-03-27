import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { Compte } from '../models/Compte';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compte-byuser',
  templateUrl: './compte-byuser.component.html',
  styleUrls: ['./compte-byuser.component.css']
})
export class CompteByuserComponent implements OnInit {
listCompte:Compte[]=[]
iduserURL:number
compte: Compte= new Compte();
  constructor(private compteservice:CompteService, private route :ActivatedRoute) { 
    this.iduserURL = parseInt(this.route.snapshot.paramMap.get('id'));
this.compteservice.getAll().subscribe(
  data=>{
    this.listCompte=data;
})
  }

  ngOnInit(): void {
this.compteservice.getbyid(this.iduserURL).subscribe(
  data=>(
    this.compte=data
  )
)
  }

}
