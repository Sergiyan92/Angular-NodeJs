import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  loggedIn = false;
  errorMessage = '';

  constructor(private apiService: ApiService) {}

  login() {
    this.apiService.login(this.email, this.password).subscribe(
      (response) => {
        this.loggedIn = true;
        this.errorMessage = '';
        // Тут ви можете обробити отримані дані
        console.log(response);
      },
      (error) => {
        this.loggedIn = false;
        this.errorMessage = 'Login failed: ' + error.error.error;
        console.error(error);
      }
    );
  }
}
