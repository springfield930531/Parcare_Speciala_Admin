import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  public username = "";
  public pw = "";
  public errorMessage = null;
  public activateLoader = false;

  ngOnInit() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('parcareUserToken');

    if (token && !jwtHelper.isTokenExpired(token)) {
      this.router.navigateByUrl('/parcare-dashboard');
    }
  }

  // on login click handler
  public async onLoginClick() {
    
    this.activateLoader = true;
    this.errorMessage = null;
    try {
      const res = await this.apiService.loginFn(this.username, this.pw).toPromise();
      if(res && res.data) {
        localStorage.setItem('parcareUserToken', res.data);
        this.router.navigateByUrl('/parcare-dashboard');
      }
      this.activateLoader = false;
    }
    catch(e) {
      console.log("eroare", e);
      this.errorMessage = e.error.error || "Date incorecte";
      this.activateLoader = false;
    }
    
  }

}
