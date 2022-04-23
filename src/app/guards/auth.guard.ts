import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable, map} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
    return this.authService.token$.pipe(
      map((token) => {
        if (AuthGuard.isEmpty(token)) {
          return this.router.createUrlTree(['/', 'login']);
        }
        return true;
      })
    );
  }

  private static isEmpty (object: unknown): boolean {
    return object === null || object === undefined || object === '';
  }

}
