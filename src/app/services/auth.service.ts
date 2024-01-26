// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;
  private role: string | null = '';

  setToken(token: string, role: string): void {
    this.token = token;
    this.role = role;
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }
  getRole(): string | null {
    if (!this.role) {
      this.role = localStorage.getItem('token');
    }
    return this.role;
  }

  clearToken(): void {
    this.token = null;
    this.role = null;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  logout(): void {
    this.clearToken();
  }
}
