import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import Swal from "sweetalert2";
import { Issue } from "./issue.model";

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = 'http://localhost:3000/issues';

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<never> {
    Swal.fire('Error', error.message || 'Something went wrong!', 'error');
    return throwError(error);
  }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getIssueById(id: number): Observable<Issue> {
    return this.http.get<Issue>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.apiUrl, issue).pipe(
      catchError(this.handleError)
    );
  }

  updateIssue(id: number, issue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`${this.apiUrl}/${id}`, issue).pipe(
      catchError(this.handleError)
    );
  }

  deleteIssue(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
}
