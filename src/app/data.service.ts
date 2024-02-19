import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient,private auth: AuthService) { }

  addUser(data:any){
    return this.http.post("http://localhost:3200/sign_up",data)
  }

  loginUser(data:any){
    return this.http.post("http://localhost:3200/login",data)
  }

  getTasks(){
    const token = this.auth.getToken()
    const headers ={
      'Authorization' : 'Bearer ' + token
    }
    return this.http.get("http://localhost:3200/tasks",{headers:headers})
  }

  editState(id:any,state:any){
    const token = this.auth.getToken()
    const headers ={
      'Authorization' : 'Bearer ' + token
    }
    const url = `http://localhost:3200/updateState/${id}`
    return this.http.post(url,{state},{headers:headers})
  }

  getSingleTask(id:any){
    const token = this.auth.getToken()
    const headers ={
      'Authorization' : 'Bearer ' + token
    }
    return this.http.get("http://localhost:3200/singleTask/"+id,{headers:headers})

  }

  logout(){
    const token = this.auth.getToken()
    const headers ={
      'Authorization' : 'Bearer ' + token
    }
    return this.http.post("http://localhost:3200/logout/",{headers:headers})
  }

  addTask(data:any){
    const token = this.auth.getToken()
    const headers = {
      'Authorization' : "Bearer " + token
    }
    return this.http.post("http://localhost:3200/addTask",data,{headers:headers})
  }

  updateTask(id:any,data:any){
    const token = this.auth.getToken()
    const headers ={
      'Authorization' : 'Bearer ' + token
    }
    const url = `http://localhost:3200/updateTask/${id}`
    return this.http.post(url,data,{headers:headers})
  }

  deleteTask(id:any){
    const token = this.auth.getToken()
    const headers ={
      'Authorization' : 'Bearer ' + token
    }
    const url = `http://localhost:3200/deleteTask/${id}`
    return this.http.delete(url,{headers:headers}) 
  }
}
