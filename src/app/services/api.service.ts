import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Оновіть зі своєю URL-адресою сервера Node.js

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };

    // Ваш сервер може вимагати встановлення заголовка Content-Type на 'application/json'.
    // Тут приклад додавання заголовків до запиту.
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/api/login`, body, { headers });
  }

  // Додайте інші методи для інших API шляхів за потребою
}
