import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private tokenKey = 'access-token'

   setToken(token : string){
      localStorage.setItem(this.tokenKey,token)
   }

   getToken(){
    return localStorage.getItem(this.tokenKey)
   }

   removeToken(){
    localStorage.removeItem(this.tokenKey)
   }

   isLoggedIn(){
    return !!this.getToken()
   }
}
