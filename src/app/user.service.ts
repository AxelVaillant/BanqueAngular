import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from './models/user';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<User[]>('http://localhost:8080/user/all').pipe()
  }
  create(user: User){
    return this.http.post<User>('http://localhost:8080/user/save',user).pipe()
  }
}
