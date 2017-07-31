import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ApiService {

  apiData;
  eventListener = new BehaviorSubject(this.apiData);


  constructor(private _http: Http) { }

  getData(search){
    console.log(search, "services")
    var promise =  this._http.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=k7PemlRTpshAGVgtOColsCsLkyGwzwvN&city=${search}&countryCode=US&classificationName=Music`).map((res: Response)=> res.json()).toPromise()
    promise.then((data)=> {
      this.apiData = data
    })
    return promise;
  }

}
