import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Operations } from '../models/Operations';

@Component({
  selector: 'app-liste-operations',
  templateUrl: './liste-operations.component.html',
  styleUrls: ['./liste-operations.component.css']
})
export class ListeOperationsComponent implements OnInit {
  listOperations : Operations[]=[]
  constructor(private operationsservice:OperationsService) { }

  ngOnInit(): void {
    this.operationsservice.getAll().subscribe(
      data=>{
        this.listOperations=data;
  })
  }

}
