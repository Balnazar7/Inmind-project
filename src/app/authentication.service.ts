import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { DeleteAccountUser, LoginUser, LogoutUser, RefreshToken, SignUpUser } from './auth.models';
import jwt_decode from "jwt-decode";
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor(
    private httpClient: HttpClient,
    private ngxPermissionsService: NgxPermissionsService
  ) { }

  url = 'http://192.168.1.187:5005/api/User';

  loginUser(credentials: LoginUser): Observable<any> {
    return this.httpClient.post<LoginUser>(this.url + '/Login()', credentials);
  }

  logoutUser(token: string | null, refreshToken: string | null): Observable<any> {
    return this.httpClient.post<LogoutUser>(this.url + '/Logout()', {token,refreshToken})
  };

  signUp(credentials: SignUpUser, role: string) {
    credentials.RoleName = role;
    if (role === "User") {
      return this.signUpUser(credentials);
    } else return this.createAdminUser(credentials);
  }

 
  signUpUser(credentials: SignUpUser): Observable<any> {
    return this.httpClient.post<SignUpUser>(this.url + '/SignUp()', credentials)
  }

  createAdminUser(credentials: SignUpUser): Observable<any> {
    return this.httpClient.post<SignUpUser>(this.url + '/CreateAdminUser()', credentials)
  }

  deleteAccount(keycloackid: string): Observable<any> {
    return this.httpClient.post<DeleteAccountUser>(this.url + '/DeleteAccount()', {keycloackid})
  }

  refreshToken(refreshtoken: string): Observable<any> {
    return this.httpClient.post<RefreshToken>(this.url + '/RefreshToken', {refreshtoken})
  }


  setToken(accessToken: string, refreshToken: string){
    localStorage.setItem('AccessToken', accessToken);
    localStorage.setItem('RefreshToken', refreshToken);
  }

  
  setProfile(): void{
  const tokenInfo = this.getDecodedAccessToken(this.getJwtToken());
  if(tokenInfo.realm_access.roles.includes("Admin")){
    this.ngxPermissionsService.addPermission('ADMIN');
    localStorage.setItem("permissions",JSON.stringify(['ADMIN']));
  }
  else{
    this.ngxPermissionsService.addPermission('USER');
    localStorage.setItem("permissions",JSON.stringify(['USER']));
  }

}
getJwtToken(): string {
  return localStorage.getItem('AccessToken')!;
}

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }



  removeTokens(){
    localStorage.removeItem('AccessToken');
    localStorage.removeItem('RefreshToken');
  }
  
  loggedIn() {
    return !!localStorage.getItem('AccessToken');
  }



}
