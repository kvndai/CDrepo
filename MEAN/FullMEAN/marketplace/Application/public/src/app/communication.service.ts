import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { User } from './user'
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  loginUser(user: User){
    console.log(user, "Login user data in ApiService");
    return this._http.post('/login', user).map(data => data.json()).toPromise();
  }
  registerUser(user: User){
    console.log(user, "Register user data in ApiService");
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }
}
