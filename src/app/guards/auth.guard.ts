import { Injectable } from '@angular/core';
import { CanActivate, Router , UrlTree } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService,
              private router: Router){}
  canActivate(): boolean {
    if(this.auth.loggedIn()){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
    
}
  
