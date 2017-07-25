import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User } from '../user'
import { ApiService } from '../communication.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loguser: User = new User();
  reguser: User = new User();
  loginError: String;
  regError: String;
  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
  }

  validateLogin(){
    console.log(this.loguser, "Login form data in LoginComponent");
    this._api.loginUser(this.loguser)
    .then(() => {
      console.log("Logged in successfully");
      this._router.navigate(['/dashboard']); })
    .catch((err) => {
      if(err.status == "401"){
        this.loginError = "Not a registered User"
        console.log(this.loginError);
      } else if(err.status == "402"){
        this.loginError = "Password incorrect"
        console.log(this.loginError);
      }
    })

  }

  validateReg(){
    console.log(this.reguser, "Reg Form Data in LoginComponent");
    this._api.registerUser(this.reguser)
    .then(() => {this._router.navigate(['/dashboard']); })
    .catch((err) => { this.regError = "A user with that email already exists." })
  }
}
