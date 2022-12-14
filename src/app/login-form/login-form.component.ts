import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Login, LoginResponse, LoginUser } from '../auth.models';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  isInvalidCredentials: boolean = false;
  loginForm: FormGroup;
  constructor(fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.loginForm = fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  login() {
    let loginUser: LoginUser = this.loginForm.value;
    this.authService.loginUser(loginUser).subscribe((res)=>{
      let login: LoginResponse = res;
      this.authService.setToken(login.Login.AccessToken, login.Login.RefreshToken);
      this.authService.setProfile();
      this.router.navigate(['/countriesModule/countries']);
    },(error)=>{
      this.isInvalidCredentials = true;
    })
  }

}
