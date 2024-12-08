import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Set the base URL to assets (for static files)
  private baseUrl = 'assets/data.json'; 

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl); // Fetch data from local data.json
  }
}
