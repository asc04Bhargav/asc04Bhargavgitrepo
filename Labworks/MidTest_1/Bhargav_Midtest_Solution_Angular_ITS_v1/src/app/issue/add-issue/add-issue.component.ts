import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssueService } from '../issue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent {
  issueForm: FormGroup;

  constructor(private fb: FormBuilder, private issueService: IssueService, private router: Router) {
    this.issueForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['Low', Validators.required],
      status: ['Open', Validators.required],
      assignee: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.issueForm.invalid) {
      return;
    }
    const newIssue = this.issueForm.value;
    this.issueService.addIssue(newIssue).subscribe(
      (createdIssue) => {
        this.router.navigate(['/issues']);
      },
      (error) => {
        console.error('Error adding issue:', error);
      }
    );
  }
}
