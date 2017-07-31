import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
  }

  logUser(){
    console.log(this.user, "user data from form");
    this._api.logUser(this.user);
    this._router.navigate(['/dashboard']);

  }
}
