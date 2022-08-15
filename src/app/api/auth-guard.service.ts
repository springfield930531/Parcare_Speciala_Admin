import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthRoutetsGuardService implements CanActivate {
  constructor(
    public router: Router
  ) {}

  canActivate(): boolean {
    
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('parcareUserToken');

    if (!token || jwtHelper.isTokenExpired(token)) { // if no token - need to login
      this.router.navigateByUrl('/login');
      return false;
    }
    else return true;

  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
