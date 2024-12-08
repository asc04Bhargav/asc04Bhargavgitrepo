import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:8080/api/v1/register'; 

  constructor(private http: HttpClient) {}

  // Fetch all registered users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Save user registration data
  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
