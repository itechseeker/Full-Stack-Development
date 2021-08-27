import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log_email:string;
  log_pw:string;
 
  constructor(private auth_service: AuthService) {}

  login(){
    // Let AuthService process login authentication
    this.auth_service.login(this.log_email,this.log_pw);    
  }

  ngOnInit(): void {
  }
}
