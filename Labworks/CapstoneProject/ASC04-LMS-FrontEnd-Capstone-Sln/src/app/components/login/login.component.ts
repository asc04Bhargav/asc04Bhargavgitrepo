import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Import AuthService
import { RegisterService } from '../../services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  errorMessage = '';
  loginAttempts: { [key: string]: { count: number; lockedUntil: Date | null } } = {};

  constructor(
    private router: Router,
    private authService: AuthService,
    private registerService: RegisterService // Inject RegisterService to fetch registered users
  ) {}

  onSubmit() {
    const { email, password } = this.loginData;

    // Check if the account is locked
    const attemptInfo = this.loginAttempts[email];
    if (attemptInfo?.lockedUntil && new Date() < attemptInfo.lockedUntil) {
      this.errorMessage = `Your account is locked. Please try again after ${attemptInfo.lockedUntil.toLocaleTimeString()}.`;
      return;
    }

    // Fetch registered users
    this.registerService.getUsers().subscribe((users) => {
      const user = users.find((u) => u.email === email);

      if (user && user.password === password) {
        // Login successful
        this.authService.login();
        this.errorMessage = '';
        this.loginAttempts[email] = { count: 0, lockedUntil: null }; // Reset attempts
        this.router.navigate(['/dashboard']);
      } else {
        // Handle invalid login
        if (!this.loginAttempts[email]) {
          this.loginAttempts[email] = { count: 0, lockedUntil: null };
        }

        this.loginAttempts[email].count++;

        if (this.loginAttempts[email].count >= 3) {
          // Lock the account for 30 minutes
          const lockUntil = new Date();
          lockUntil.setMinutes(lockUntil.getMinutes() + 30);
          this.loginAttempts[email].lockedUntil = lockUntil;
          this.errorMessage = `Your account is locked due to too many failed login attempts. Please try again after ${lockUntil.toLocaleTimeString()}.`;
        } else {
          const remainingAttempts = 3 - this.loginAttempts[email].count;
          this.errorMessage = `Invalid email or password. You have ${remainingAttempts} attempt(s) left.`;
        }
      }
    });
  }
}
