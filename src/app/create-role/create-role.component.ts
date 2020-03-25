import { Component, OnInit } from '@angular/core';
import { Role } from '../models/Role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  constructor(private roleservice: RoleService) { }
newRole : Role =new Role()
  ngOnInit(): void {
  }
  createRole(){
    this.roleservice.create(this.newRole).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
