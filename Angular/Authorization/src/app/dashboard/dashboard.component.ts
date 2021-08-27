import { Component, OnInit } from '@angular/core';
import { AuthService, Role } from '../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private auth_service: AuthService) { }

  ngOnInit(): void {
  }

  isnotGuess(){
    // Return true if user is not Guess
    return this.auth_service.role!=Role.Guess
  }
  logout(){
    this.auth_service.logout()
  }
}
