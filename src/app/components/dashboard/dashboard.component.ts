import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  assessments: any[] = [];
  isAdmin: boolean = false;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const token = this.authService.getToken();

    if (token) {
      this.loadAssessments();
      this.checkAdminRole();
    } else {
      console.error('No token available');
    }
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
    }
  }
  checkAdminRole(): void {
    const role = this.authService.getRole();
    this.isAdmin = role === 'Admin';
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
