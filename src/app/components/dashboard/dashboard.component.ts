// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  assessments: any[] = [];

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadAssessments();
  }

  loadAssessments(): void {
    const token = this.authService.getToken();

    if (token) {
      this.apiService.getUserAssessments(token).subscribe(
        (data) => {
          this.assessments = data;
        },
        (error) => {
          console.error('Error loading assessments', error);
        }
      );
    } else {
      console.error('No token available');
      // Обробити відсутність токена за необхідності
    }
  }
}
