import { Component, OnInit } from '@angular/core';
import{AuthServiceService} from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData={}
  constructor(private routes: Router,
    private auth: AuthServiceService) { }

  ngOnInit() {
  }
  registerUser(){
  
  this.auth.regUser(this.registerUserData)
  .subscribe(
    res => {console.log(res),
    localStorage.setItem('token', res.token)
      this.routes.navigate(['/events'])
  },err => console.log(err)
  )
  console.log(this.registerUserData);
}
}
