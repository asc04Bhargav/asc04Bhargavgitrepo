
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IssueListComponent } from './issue/issue-list/issue-list.component';
import { AddIssueComponent } from './issue/add-issue/add-issue.component';
import { EditIssueComponent } from './issue/edit-issue/edit-issue.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'issues', component: IssueListComponent, canActivate: [AuthGuard] },
  { path: 'add-issue', component: AddIssueComponent, canActivate: [AuthGuard] },
  { path: 'issues/:id', component: EditIssueComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
