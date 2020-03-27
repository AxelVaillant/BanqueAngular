import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Role } from '../models/Role';
import { RoleService } from '../role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  newUser : User =new User();
  listRole : Role[] = []
  iduserURL : number
  constructor(private userservice : UserService,private route:ActivatedRoute, private roleservice: RoleService) {
    this.iduserURL =parseInt(this.route.snapshot.paramMap.get('id'));

   }

  ngOnInit(): void {
   console.log(this.iduserURL);
  this.userservice.getbyid(this.iduserURL).subscribe(
    data=>(
      this.newUser=data
    )
  )}
  getbyid(id:number){
    this.userservice.getbyid(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
    
      updateUser(id:number , user:User){
        this.userservice.update(id,user).subscribe(
          data=>{
            console.log(data)
          }
        )
      }

}
