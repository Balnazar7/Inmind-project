import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ngxPermissionsService: NgxPermissionsService){}

  ngOnInit(){
    if(localStorage.getItem('permissions')){
      this.ngxPermissionsService.loadPermissions(JSON.parse(localStorage.getItem('permissions')!));
    }
  }
}
