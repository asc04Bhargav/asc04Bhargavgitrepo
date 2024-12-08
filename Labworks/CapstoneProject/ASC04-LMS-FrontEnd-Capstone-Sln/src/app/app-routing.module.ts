import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CataloguesComponent } from './components/catalogues/catalogues.component';
import { MembersComponent } from './components/members/members.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { AcquisitionComponent } from './components/acquisition/acquisition.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Add AuthGuard if needed
  { path: 'catalogues', component: CataloguesComponent, canActivate: [AuthGuard] },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  { path: 'circulation', component: CirculationComponent, canActivate: [AuthGuard] },
  { path: 'acquisition', component: AcquisitionComponent, canActivate: [AuthGuard] },
  { path: 'reviews', component: ReviewsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
