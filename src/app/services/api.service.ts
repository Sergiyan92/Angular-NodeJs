import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/api/login`, body, { headers });
  }

  getUserAssessments(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Token': token,
    });

    return this.http.get(`${this.apiUrl}/api/userassessments`, { headers });
  }
  getUserAssessmentGraph(token: string, assessmentId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Token': token,
    });

    const params = new HttpParams().set('id', assessmentId.toString());

    return this.http.get(`${this.apiUrl}/api/userassessments/graph`, {
      headers,
      params,
    });
  }
}
