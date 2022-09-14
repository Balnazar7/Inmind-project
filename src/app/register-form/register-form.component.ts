import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ConfirmedValidator } from '../Confirmed.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  roles: string[] = ['Admin','User'];


  constructor(fb: FormBuilder, private authService: AuthenticationService) {
    this.registerForm = fb.group({
      Firstname: ['',[Validators.required, Validators.maxLength(32)]],
      Lastname: ['', [Validators.required, Validators.maxLength(32)]],
      Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      ConfirmPassword: ['', [Validators.required]],
      RoleName: ['',[Validators.required]]
    },
    {validator: ConfirmedValidator('Password', 'ConfirmPassword')})
   }


  ngOnInit(): void {
  }


  SignUp(){
    console.log(this.registerForm.value);
    this.authService.signUp(this.registerForm.value,this.registerForm.value.RoleName).subscribe((res)=>{
      console.log('sign up res' + res);
    });
  }

  
}
