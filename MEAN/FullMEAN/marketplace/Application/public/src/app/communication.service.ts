import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { User } from './user'
import { Bicycle } from './bicycle';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  // creates new observable
  bikeObservable = new BehaviorSubject(null);
  constructor(private _http: Http) { }

  // updates observable (products is data sent from the component which called on updateProducts
  updateBikes(bikes: Array<Bicycle>){
  // .next method simply udates the data in the observable
  this.bikeObservable.next(bikes)
  }

  registerUser(user) {
    console.log(user, "Register user data in ApiService");
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }
  loginUser(user) {
    console.log(user, "Login user data in ApiService");
    return this._http.post('/login', user).map(data => data.json()).toPromise();
  }
  getCurrentUser() {
    console.log("Getting current user data, in ApiService");
    return this._http.get('/currentUser').map(data => data.json()).toPromise();
  }
  getAllBikes() {
    console.log("Grabbing bike data, in ApiService");
    return this._http.get('/bicycles').map(data => data.json()).toPromise();
  }
  addBike(bike) {
    return this._http.post('/bicycle', bike).map(data => data.json()).toPromise();
  }
  getAllUserBikes() {
    return this._http.get('/myBicycles').map(data => data.json()).toPromise();
  }

  updateBike(bike) {
    return this._http.post('/bicycle/edit', bike).map(data => data.json()).toPromise();
  }

  deleteBike(bike) {
    return this._http.post('/bicycle/destroy', bike).map(data => data.json()).toPromise();
  }

  getContactInfo(user_id) {
    return this._http.post('/contact', user_id).map(data => data.json()).toPromise();
  }

  getRandomBike() {
    return this._http.get('/bikeOfTheDay').map(data => data.json()).toPromise();
  }

  filterBikes(search) {
    return this._http.post('/bicycles/search', search).map(data => data.json()).toPromise();
  }


  logout() {
    console.log("Sending logout request to routes. In ApiService");
    return this._http.get('/logout').map(data => data.json()).toPromise();
  }
}
