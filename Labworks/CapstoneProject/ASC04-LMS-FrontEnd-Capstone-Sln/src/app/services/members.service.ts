import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';

// Define the member interface
export interface Member {
    id: string;
    name: string;
    email: string;
    number: string;
    gender: string;
  }

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://localhost:8080/api/v3/members'; // Change with your backend API URL

  constructor(private http: HttpClient) {}

  // Fetch members data from the API
  getMembers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Assuming the response is an array of members
  }

  // Add a new member
  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.apiUrl, member);
  }

  // Update an existing member
  updateMember(id: string, member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.apiUrl}/${id}`, member);
  }

  // Delete a member by ID
  deleteMember(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
