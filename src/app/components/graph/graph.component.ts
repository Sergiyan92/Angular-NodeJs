// graph/graph.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  graphData: any;
  assessmentId: number = 0;
  keys(obj: any): string[] {
    return Object.keys(obj);
  }
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.assessmentId = +params['id'];
      this.fetchGraphData();
    });
  }

  fetchGraphData(): void {
    const token = this.authService.getToken();

    if (token) {
      this.apiService
        .getUserAssessmentGraph(token, this.assessmentId)
        .subscribe(
          (data) => {
            this.graphData = data;
          },
          (error) => {
            console.error('Помилка завантаження даних графіка', error);
          }
        );
    } else {
      console.error('Token is null');
    }
  }
  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
