import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { JWTInterceptorService } from './shared/jwtinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    DashboardModule
  ],
  // Configue JWTInterceptor
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
