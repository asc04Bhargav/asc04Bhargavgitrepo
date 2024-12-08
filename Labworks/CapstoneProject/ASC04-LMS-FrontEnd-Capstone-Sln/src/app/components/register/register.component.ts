import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerData = { id: '', name: '', email: '', password: '', mobile: '', gender: '' };
  errorMessage: string = '';

  constructor(private registerService: RegisterService, private router: Router) {}

  // Register new user
  onSubmit() {
    const { name, email, password, mobile, gender } = this.registerData;

    // Validation
    if (name.length < 3) {
      this.errorMessage = 'Name must be at least 3 characters long';
      return;
    }

    if (gender === '') {
      this.errorMessage = 'Please select gender';
      return;
    }

    if (mobile.length !== 10 || !/^[9876][0-9]{9}$/.test(mobile)) {
      this.errorMessage = 'Please enter a valid mobile number';
      return;
    }

    // Generate unique ID and save registration data
    this.registerData.id = ''; // Let the server handle ID generation
    this.registerService.registerUser(this.registerData).subscribe(
      () => {
        this.router.navigate(['/login']); // Redirect to login after successful registration
      },
      (err) => {
        this.errorMessage = 'Error during registration. Please try again!';
        console.error(err);
      }
    );
  }
}
