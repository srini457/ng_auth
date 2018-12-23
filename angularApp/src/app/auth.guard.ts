import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServ:AuthServiceService,
    private router: Router){}
  canActivate(): boolean {
    if(this.authServ.loggedIn()){
    return true;
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
