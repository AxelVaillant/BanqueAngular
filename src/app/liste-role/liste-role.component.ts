import { Component, OnInit } from '@angular/core';
import { Role } from '../models/Role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-liste-role',
  templateUrl: './liste-role.component.html',
  styleUrls: ['./liste-role.component.css']
})
export class ListeRoleComponent implements OnInit {
listRole : Role[]=[]
  constructor(private roleservice : RoleService) { }

  ngOnInit(): void {
    this.roleservice.getAll().subscribe(
     data=>{
       this.listRole=data;
     }
    )
  }

}
