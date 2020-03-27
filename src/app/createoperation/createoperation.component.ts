import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Compte } from '../models/Compte';
import { CompteService } from '../compte.service';
import { Operations } from '../models/Operations';

@Component({
  selector: 'app-createoperation',
  templateUrl: './createoperation.component.html',
  styleUrls: ['./createoperation.component.css']
})
export class CreateoperationComponent implements OnInit {
listCompte:Compte[]=[]
  newOperations:Operations =new Operations()
  constructor(private operationsservice: OperationsService, private compteservice :CompteService) { }

  ngOnInit(): void {
    this.compteservice.getAll().subscribe(
      data=>{
        this.listCompte=data;
      }
    )
  }
  createOperations(){
    this.operationsservice.create(this.newOperations).subscribe(
      data=>{
        console.log(data)
      }
    )
  }

}
