import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  private registerUrl = "http://localhost:3000/api/register";
  private loginUrl = "http://localhost:3000/api/login";
  constructor(private http :HttpClient) { }
  regUser(user){
    return this.http.post<any>(this.registerUrl, user)
  }
  logInUser(user){
    return this.http.post<any>(this.loginUrl, user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }

}
