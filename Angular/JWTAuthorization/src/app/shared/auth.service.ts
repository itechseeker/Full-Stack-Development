import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

// Define user role
export enum Role{
  Guess= 'Guess',
  User = 'User',
  Admin = 'Admin'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role: Role;
  refresh_token: string;
  access_token: string;
  token_interval: any;

  constructor(private router: Router, private httpClient: HttpClient) {   
    // Check the access token 
    this.tokenChecking()
    // Check token every 1 min to make sure user always get update token 2
    this.tokenInterval() 
  } 
   
  // Login function
  login(log_uname, log_pw){        
    this.httpClient.post('http://127.0.0.1:8000/get-token/',{username: log_uname, password:log_pw}).subscribe(
      response => {
        // console.log(response)
        this.refresh_token=response['refresh'];
        this.access_token=response['access']

        // Decode received token
        var decoded_access = jwt_decode(this.access_token);
        var decoded_refresh = jwt_decode(this.refresh_token);
        this.role=decoded_access['role'] ;

        //  Store access token and its expired time
        localStorage.setItem('access_token', this.access_token);
        localStorage.setItem('access_exp', decoded_access['exp']);

        //  Store refresh token and its expired time
        localStorage.setItem('refresh_token', this.refresh_token);
        localStorage.setItem('refresh_exp', decoded_refresh['exp']);
        
        // Redirect to dashboard (AuthGuard will check with canActivate() method )
        this.router.navigate(['/dashboard']);
      }
    )    
  }

  // Logout function
  logout(){
    //  Remove stored information
    localStorage.removeItem('access_token')
    localStorage.removeItem('access_exp')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('refresh_exp')
    // Redirect to login page
    this.router.navigate(['/login']);
  }

  //  Check access token every 1 min to see if it is still valid
  tokenInterval() {
    this.token_interval = setInterval(() => {
      this.tokenChecking();
    },60*1000)
  }

  ngOnDestroy() {
    clearInterval(this.token_interval);
  }

  tokenChecking(){
    console.log('check token first')
    let access_token=localStorage.getItem('access_token') 
    // Check if access token exsist
    if(access_token){
      // Remain valid time of access token
      var time2refresh= parseInt(localStorage.getItem('access_exp')) - Math.floor(Date.now() / 1000)
      // If the token valid less than 1 mins
      if(time2refresh< 60){
          // Check if refresh token is still valid
          var refreshTime= parseInt(localStorage.getItem('refresh_exp')) - Math.floor(Date.now() / 1000)
          // If the refresh token valid more than 1 min
          if(refreshTime>60){
            // Get new access token using refresh token
            this.refresh2token()           
            console.log('Get new access token successfully')              
          }
      }
    }
  }

  // Use async and await to wait for refresh2token() function
   isAuthenticated(){    
    let refresh_token=localStorage.getItem('refresh_token') 
    // Check if refresh token exsist
    if(refresh_token){
      var refreshTime= parseInt(localStorage.getItem('refresh_exp') ) - Math.floor(Date.now() / 1000)
      // If the refresh token valid more than 1 min
      if(refreshTime>60){      
        // Get user role
        this.role= jwt_decode(refresh_token)['role']
        return true    
      }
    }    
    // return false by default
    return false
  } 

  refresh2token(){
    console.log('Get new token using refresh token')
    this.httpClient.post('http://127.0.0.1:8000/refresh-token/',{refresh: localStorage.getItem('refresh_token')}).subscribe(
      response => {
        // Extract response data 
        this.access_token=response['access']
        var decoded_access = jwt_decode(this.access_token);
        this.role=decoded_access['role'];     

        //  Store access token and its expired time
        localStorage.setItem('access_token', this.access_token);
        localStorage.setItem('access_exp', decoded_access['exp']); 
      }
    ) 
  }
}
