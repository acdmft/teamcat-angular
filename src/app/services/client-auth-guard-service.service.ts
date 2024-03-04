import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthGuardServiceService implements CanActivate  {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /* if (!this.authService.isUserClient()) {
        this.router.navigate(['/home'])
        return false;
      } */

    if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['/home']);
    return false;

  }

}