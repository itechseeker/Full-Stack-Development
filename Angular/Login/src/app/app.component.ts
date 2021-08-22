import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  log_email:string;
  log_pw:string;
  login_result="";

  constructor() {}
  // Process login information 
  login(){
    // when the user enter correct user name and password
    if(this.log_email=="admin" && this.log_pw =="123")
    {
      this.login_result="Login Successfully"
    }
    else{
      this.login_result="Wrong Username or Password"
    }
  }
}
