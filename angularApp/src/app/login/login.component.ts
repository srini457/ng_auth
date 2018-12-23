import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(private routes: Router,
    private auth: AuthServiceService) { }

  ngOnInit() {
  }
  loginUser(){
    this.auth.logInUser(this.loginUserData).subscribe(
      res=> {console.log(res),
        localStorage.setItem('token', res.token)
        this.routes.navigate(['/events'])
 
      },
      err=> console.log(err)
    )
    console.log(this.loginUserData)
  }
}
