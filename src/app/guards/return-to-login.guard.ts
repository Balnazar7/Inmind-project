import { Injectable } from '@angular/core';
import {CanActivate, UrlTree, Router} from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ReturnToLoginGuard implements CanActivate {
  constructor(private auth: AuthenticationService,
    private router: Router){}
    canActivate(): boolean {
    if(this.auth.loggedIn()){
      return false;
    } else {
      this.router.navigate(['/countries'])
     return true;
    }
    }


  
}
