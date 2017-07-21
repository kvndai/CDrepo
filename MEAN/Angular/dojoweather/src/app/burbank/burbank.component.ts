import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from './../weatherapi.service';
import { Cityweather } from './../cityweather';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  constructor(private _weatherapiService: WeatherapiService) { }

  ngOnInit() {
    this._weatherapiService.retrieveApi('4885983')
      .then(data => {
        console.log(data);
        // set new data values to new instance of Cityweather Class.
      })
      .catch(err => {
        console.log(err);
      })
  }

}
