import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private apiService: ApiService) {}

  login(): void {
    const email = 'user@deepersignals.com';
    const password = 'password';

    this.apiService.login(email, password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Тут ви можете обробити відповідь від сервера
      },
      (error) => {
        console.error('Login failed:', error);
        // Тут ви можете обробити помилку від сервера
      }
    );
  }
}
