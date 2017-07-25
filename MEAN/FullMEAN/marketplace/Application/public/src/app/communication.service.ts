import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { User } from './user'
import { Bicycle } from './bicycle';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }
  // creates new observable
  productsObservable = new BehaviorSubject(null);
  // // updates observable (products is data sent from the component which called on updateProducts
  // updateProducts(bikes: Array<Bicycle>){
  // // .next method simply udates the data in the observable
  // this.productsObservable.next(bikes)
  getAllBikes(){
    console.log("Grabbing bike data, in ApiService");
    return this._http.get('/bicycles').map(data => data.json()).toPromise();
  }

  registerUser(user: User){
    console.log(user, "Register user data in ApiService");
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }

  loginUser(user: User){
    console.log(user, "Login user data in ApiService");
    return this._http.post('/login', user).map(data => data.json()).toPromise();
  }

  logout(){
    console.log("Sending logout request to routes. In ApiService");
    return this._http.get('/logout').map(data => data.json()).toPromise();
  }
}
