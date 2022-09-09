import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  user?: User;
  registerForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      firstName: ['',Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern]],
      role: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  roles = ['Admin','User'];
 
  onSubmit(){
    console.warn(this.registerForm.value);
  }
}
