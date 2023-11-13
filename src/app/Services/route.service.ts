import { EventEmitter, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { of } from 'rxjs';

type checkAuth = () => boolean;

@Injectable({
  providedIn: 'root',
})
export class RouteService implements CanActivate {
  constructor(private router: Router) {}

  auth: checkAuth = function (): boolean {
    if (localStorage.getItem('auth')) {
      // return localStorage.getItem('auth') === 'true' ? true : false;
      let value = false;
      of(localStorage.getItem('auth') === 'true').subscribe((val) => {
        console.log('authSub ----- ' + val);
        value = val;
      });

      return value;
    }

    return false;
  };

  logoutButtonEmitter = new EventEmitter();

  login() {
    localStorage.setItem('auth', String(true));
    setTimeout(() => this.logoutButtonEmitter.emit(true), 5000);
    // this.authSub.subscribe((val) => console.log(val));
  }
  logout() {
    localStorage.setItem('auth', String(false));
    this.router.navigateByUrl('');
    this.logoutButtonEmitter.emit(false);
    // this.authSub.subscribe((val) => console.log(val));
  }

  authSub = of(this.auth());

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth()) this.router.navigateByUrl('');
    return this.auth();
  }
}
