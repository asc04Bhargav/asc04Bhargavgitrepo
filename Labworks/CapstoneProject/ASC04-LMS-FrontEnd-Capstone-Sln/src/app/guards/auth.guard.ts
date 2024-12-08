import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate{
  constructor(private router: Router){}

  canActivate(): boolean{
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn === 'true'){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
