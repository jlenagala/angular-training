import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/component/user/list-users/list-users.component';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http:HttpClient
  ) { }

  fetchAllData(){ 
    //console.log("Exexute excute Hello World Service");
     return this.http.get<User[]>('http://localhost:8393/services/employees')
      
    }

  deleteData(id){
    return this.http.delete(`http://localhost:8393/services/employees/${id}`)
      
  }

  updateData(id){ 
    //console.log("Exexute excute Hello World Service");
     return this.http.get<User>(`http://localhost:8393/services/employees/${id}`)
      
    }
}
