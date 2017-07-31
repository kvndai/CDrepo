import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  apiData;
  constructor(public _api: ApiService) { 
    _api.eventListener.subscribe(data => {
      this.apiData = data;
      console.log(this.apiData)
    })
  }

  ngOnInit() {

  }

}
