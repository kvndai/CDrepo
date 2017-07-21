import { Injectable } from '@angular/core';
import 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class WeatherapiService {

  constructor(private _http: Http) { }
  retrieveApi(cityid){
    return this._http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=689d5bd5de783a830baf082ed2e0db03`)
    .map( data => data.json())
    .toPromise();
  }

}
