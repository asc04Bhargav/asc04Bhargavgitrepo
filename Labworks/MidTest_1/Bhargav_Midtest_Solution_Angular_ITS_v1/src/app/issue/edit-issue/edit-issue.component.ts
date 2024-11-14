import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../issue.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {
  issueForm!: FormGroup;
  issueId: number=0;

  constructor(
    private fb: FormBuilder,
    private issueService: IssueService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.issueId = +params['id']; // parse id as a number
      this.loadIssue();
    });
  }

  loadIssue(): void {
    this.issueService.getIssueById(this.issueId).subscribe(
      (issue) => {
        this.issueForm = this.fb.group({
          id: [issue.id, Validators.required],
          title: [issue.title, Validators.required],
          description: [issue.description, Validators.required],
          priority: [issue.priority, Validators.required],
          status: [issue.status, Validators.required],
          assignee: [issue.assignee, Validators.required],
          date: [issue.date, Validators.required]
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
    const updatedIssue = { ...this.issueForm.value, id: this.issueId }; // add id explicitly
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
