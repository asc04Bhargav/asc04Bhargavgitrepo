import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { IssueService } from '../issue.service';
import { Issue } from '../issue.model';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  searchText = '';

  constructor(
    private issueService: IssueService,
    private router: Router // Inject Router for navigation
  ) {}

  ngOnInit(): void {
    this.loadIssues();
  }

  loadIssues(): void {
    this.issueService.getIssues().subscribe(issues => {
      this.issues = issues;
    });
  }

  deleteIssue(id: number): void {
    if (confirm('Are you sure you want to delete this issue?')) {
      this.issueService.deleteIssue(id).subscribe(() => {
        this.loadIssues();
      });
    }
  }

  logout(): void {
    sessionStorage.removeItem('loggedIn');
    alert("you are logged out");
    this.router.navigate(['/']); 

  }
}
