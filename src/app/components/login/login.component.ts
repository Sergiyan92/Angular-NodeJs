import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  loggedIn = false;
  errorMessage = '';

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.apiService.login(this.email, this.password).subscribe(
      (response) => {
        this.loggedIn = true;
        this.errorMessage = '';
        this.authService.setToken(response.token, response.role);
        console.log(response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.loggedIn = false;
        this.errorMessage = 'Login failed: ' + error.error.error;
        console.error(error);
      }
    );
  }
}
