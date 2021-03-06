import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService, GoogleLoginProvider, SocialUser} from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private isLoggedIn: boolean = false;

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.authState.subscribe((currentUser) => {
      this.isLoggedIn = currentUser !== null;
      console.log(currentUser);
    });
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isLoggedIn === false) {
      this.router.navigateByUrl('/login');
    }
    return this.isLoggedIn;
  }
}
