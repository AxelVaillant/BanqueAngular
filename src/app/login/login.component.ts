import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { localizedString } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User()
  userloggedin: User
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
  }
  login(){
    this.userservice.login(this.user).subscribe(
      data=>{
        if(data){

        
        this.userloggedin=data;
        localStorage.setItem("user",this.userloggedin.nomuser);
       
        localStorage.setItem("role","client");
      }
    }
      )
      
  }

  logOut(){
    localStorage.clear()
  }
}
