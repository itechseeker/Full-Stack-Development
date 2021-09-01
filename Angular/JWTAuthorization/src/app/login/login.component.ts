import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Role } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log_username:string;
  log_pw:string;
  log_role= Role.Admin;
 
  constructor(private auth_service: AuthService) {}

  login(){
    // Let AuthService process login authentication
    this.auth_service.login(this.log_username,this.log_pw);    
  }

  ngOnInit(): void {
  }
}
