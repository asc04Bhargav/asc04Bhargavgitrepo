import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login(username: string, password: string): Observable<boolean> {
    // Mock login logic
    if (username === 'admin' && password === 'password') {
      this.loggedIn = true;
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
