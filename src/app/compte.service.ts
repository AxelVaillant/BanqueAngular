import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from './models/Compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Compte[]>('http://localhost:8080/compte/all').pipe()
  }
  create(compte: Compte){
    return this.http.post<Compte>('http://localhost:8080/compte/save',compte).pipe()
  }
  getbyid(id:number){
    return this.http.get<Compte>('http://localhost:8080/compte/byid/'+id).pipe()
  }
  update(id:number,compte:Compte){
    return this.http.put<Compte>('http://localhost:8080/compte/update/'+id,compte).pipe()
  }
}
