import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { DeleteAccountUser, LoginUser, LogoutUser, RefreshToken, SignUpUser } from './auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = 'http://192.168.1.187:5005/api/User';

  loginUser(credentials: LoginUser): Observable<any> {
    return this.httpClient.post<LoginUser>(this.url + '/Login()', credentials);
  }

  logoutUser(token: string, refreshToken: string): Observable<any> {
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

  removeTokens(){
    localStorage.removeItem('AccessToken');
    localStorage.removeItem('RefreshToken');
  }
  
  loggedIn() {
    return !!localStorage.getItem('AccessToken');
  }



}
