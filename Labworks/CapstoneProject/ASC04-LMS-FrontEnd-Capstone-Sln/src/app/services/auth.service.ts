import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    // On initialization, check the login state from localStorage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.loggedInSubject.next(loggedIn);  // Emit the state to components immediately
  }

  get loggedIn$() {
    return this.loggedInSubject.asObservable();
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedInSubject.next(true);  // Emit the login state
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.loggedInSubject.next(false);  // Emit the logout state
  }
}
