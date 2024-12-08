import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CirculationService {
  private apiUrl = 'http://localhost:8080/api/v4/circulations';

  constructor(private http: HttpClient) {}

  // Fetch all circulations
  getCirculations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new circulation
  addCirculation(circulation: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, circulation);
  }

  // Update an existing circulation
  updateCirculation(id: string, circulation: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, circulation);
  }

  // Delete a circulation
  deleteCirculation(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
