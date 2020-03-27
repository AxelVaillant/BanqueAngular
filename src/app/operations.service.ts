import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operations } from './models/Operations';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Operations[]>('http://localhost:8080/operations/all').pipe()
  }
  create(operations: Operations){
    return this.http.post<Operations>('http://localhost:8080/operations/save',operations).pipe()
  }
  getbyid(id:number){
    return this.http.get<Operations>('http://localhost:8080/operations/byid/'+id).pipe()
  }
}
