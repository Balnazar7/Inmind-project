import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  user?: User;
  registerForm: FormGroup;
  roles = ['Admin','User'];


  constructor(fb: FormBuilder, private authService: AuthenticationService) {
    this.registerForm = fb.group({
      Firstname: ['',[Validators.required, Validators.maxLength(32)]],
      Lastname: ['', [Validators.required, Validators.maxLength(32)]],
      Email: ['', [Validators.required, Validators.pattern('\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b')]],
      Password: ['',[Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})')]],
      RoleName: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

 
  onSubmit(){
    console.warn(this.registerForm.value);
  }

  SignUp(){
    console.log(this.registerForm);
    this.authService.signUp(this.registerForm.value,this.registerForm.value.RoleName).subscribe((res)=>{
      console.log(res);
    });
  }
}
