import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IssueListComponent } from './issue/issue-list/issue-list.component';
import { AddIssueComponent } from './issue/add-issue/add-issue.component';
import { EditIssueComponent } from './issue/edit-issue/edit-issue.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './filter.pipe';
import { AuthService } from './auth/auth.service';
import { IssueService } from './issue/issue.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IssueListComponent,
    AddIssueComponent,
    EditIssueComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, IssueService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
