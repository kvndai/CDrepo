import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  currentUser;
  observable = new BehaviorSubject(this.currentUser)

  constructor(private _http: Http) { }

  logUser(user){
    this.currentUser = user;
    console.log(this.currentUser, "name set in service for subscription");
  }

  logOut(){
    this.currentUser = null;
    console.log(this.currentUser, "user logged out");
  }

  createQuestion(question){
    console.log(question, 'create form data');
    return this._http.post('/createQuestion', question).map((data)=>data.json()).toPromise()
  }

  findAll(){
    return this._http.get('/findAll').map((data)=>data.json()).toPromise()
  }

  findOne(id){
    console.log(id);
    return this._http.get('/findOne' + id).map((data)=>data.json()).toPromise()
  }

  createAnswer(answer){
    console.log(answer, 'create answer form');
    return this._http.post('/createAnswer', answer).map((data)=>data.json()).toPromise()
  }

  findAnswer(){
    console.log("finding answers");
    return this._http.get('/findAnswer').map((data)=>data.json()).toPromise()
  }
}
