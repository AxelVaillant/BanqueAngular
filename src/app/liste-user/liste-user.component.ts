import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
listUser : User[]=[];
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getAll().subscribe(
      data=>{
        this.listUser=data;
      }
    )
  }
  getbyid(iduser:number){
    this.userservice.getbyid(iduser).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  updateUser(id:number,user:User){
    this.userservice.update(id,user).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  deleteUser(id:number){
    this.userservice.delete(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }

}
