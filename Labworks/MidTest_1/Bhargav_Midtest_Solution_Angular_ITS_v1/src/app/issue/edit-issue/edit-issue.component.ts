import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../issue.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {
  issueForm!: FormGroup; // Declare FormGroup
  issueId: number = 0;   // Issue ID

  constructor(
    private fb: FormBuilder,
    private issueService: IssueService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Initialize FormGroup to prevent template errors
    this.issueForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      assignee: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Get issue ID from route parameters
    this.route.params.subscribe(params => {
      this.issueId = +params['id']; // Parse ID as a number
      this.loadIssue();
    });
  }

  loadIssue(): void {
    // Fetch issue data and patch it to the form
    this.issueService.getIssueById(this.issueId).subscribe(
      (issue) => {
        this.issueForm.patchValue({
          id: issue.id,
          title: issue.title,
          description: issue.description,
          priority: issue.priority,
          status: issue.status,
          assignee: issue.assignee,
          date: issue.date
        });
      },
      (error) => {
        console.error('Error loading issue:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.issueForm.invalid) {
      return;
    }

    // Update issue with form data
    const updatedIssue = this.issueForm.value;
    this.issueService.updateIssue(this.issueId, updatedIssue).subscribe(
      () => {
        this.router.navigate(['/issues']);
      },
      (error) => {
        console.error('Error updating issue:', error);
      }
    );
  }
}
