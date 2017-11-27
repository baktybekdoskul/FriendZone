import {Injectable, Injector, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";
import {SessionService} from "../services/session.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private session: SessionService) {

  }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const loginExpr = /login/;
    const homeExpr = /home/;
    if (loginExpr.test(state.url.toString())) {
      console.log(!this.session.isActive)
      if (!this.session.isActive) {
        return true;
      }else {
        this.router.navigate(['/home']);
        return false;
      }
    } else {
      if (this.session.isActive) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
