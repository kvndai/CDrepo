import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../communication.service'

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
    this._api.getCurrentUser()
    .then((user) => { })
    .catch((err) => { 
      console.log(err);
      this._router.navigate(['/login']); });
  }

  logout(){
    console.log("Logout Clicked");
    this._api.logout()
    .then(() => {this._router.navigate(['/login'])})
    .catch((err) => {
      console.log(err);
    })


  }
}
