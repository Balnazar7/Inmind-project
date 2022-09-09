import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm?: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      
    })
   }

  ngOnInit(): void {
  }

}
