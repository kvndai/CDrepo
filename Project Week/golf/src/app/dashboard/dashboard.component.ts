import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  gotData;
  eventData;
  searchStr;

  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
    
  }

  getData() {
    this._api.getData(this.searchStr)
      .then((data) => {
        this.gotData = data._embedded.events;
        console.log(this.gotData, "DB data of all music.");
        // this.getArtistInfo();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getEventInfo(a){
    this.showDiv();
    this.eventData = this.gotData[a]
  }

  showDiv(){
    var x = document.getElementById('event');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
  }

}
