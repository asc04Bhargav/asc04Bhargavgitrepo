import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private apiUrl = 'http://localhost:8080/api/v2/catalogues'; // JSON Server URL

  constructor(private http: HttpClient) {}

  // Fetch all catalogues
  getCatalogues(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new catalogue
  addCatalogue(catalogue: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, catalogue);
  }

  // Update an existing catalogue
  updateCatalogue(id: string, catalogue: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, catalogue);
  }

  deleteCatalogue(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
