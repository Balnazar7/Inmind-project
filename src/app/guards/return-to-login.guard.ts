import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { CountriesComponent } from '../countries/countries.component';

@Injectable({
  providedIn: 'root'
})
export class ReturnToLoginGuard implements CanDeactivate<unknown> {
  constructor(private auth: AuthenticationService,
    private router: Router){}
  canDeactivate(
    component: CountriesComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.auth.loggedIn()){
        return false;
      }
      else return false;
    
  }
  
}
