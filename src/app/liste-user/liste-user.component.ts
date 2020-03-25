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

}
