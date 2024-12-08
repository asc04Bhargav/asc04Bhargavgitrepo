import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to the login state to reflect updates
    this.authService.loggedIn$.subscribe((status) => {
      this.loggedIn = status;

      if (this.loggedIn) {
        // Redirect to dashboard after login if not already on it
        if (this.router.url === '/login') {
          this.router.navigate(['/dashboard']);
        }
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
