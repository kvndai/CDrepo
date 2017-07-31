import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser;
  questions = [];
  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
    this.currentUser = this._api.currentUser;
    console.log(this.currentUser, "currentUser from Service subscription");
    this.findAll();

  }
  findAll(){
    this._api.findAll()
    .then((data) => {
        console.log(data, "DB data of all questions.");
        this.questions = data; })
      .catch((err) => { console.log(err); });
  }
  logout(){
    this._api.logOut();
    this._router.navigate([''])
  }
}
