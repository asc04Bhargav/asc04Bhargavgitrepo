import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CataloguesComponent } from './components/catalogues/catalogues.component';
import { MembersComponent } from './components/members/members.component';
import { AddCatalogueComponent } from './components/add-catalogue/add-catalogue.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CataloguesComponent,
    MembersComponent,
    AddCatalogueComponent,
    CirculationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    RouterModule,        
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
