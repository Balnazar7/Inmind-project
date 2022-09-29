import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  

  ngOnInit(): void {
  }

  logOut(){
    var accessToken = localStorage.getItem('AccessToken');
    var refreshToken  = localStorage.getItem('RefreshToken');
    this.auth.logoutUser(accessToken, refreshToken);
    this.auth.removeTokens()
    this.router.navigate(['/login']);
  }

  showMenu(){
    const logout = document.getElementById('log-out');
    function logOut(){
      debugger
      console.log('im in the function')   
        if(logout?.style.display === 'block'){
          logout.style.display = 'none';
          console.log('block')
        }
        else if(logout?.style.display === 'none'){
          logout.style.display = 'block';
          console.log('none')
        }
    }
  }
}
