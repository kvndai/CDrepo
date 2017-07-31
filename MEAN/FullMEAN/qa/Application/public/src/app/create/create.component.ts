import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Question } from './../question'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  currentUser;
  question = new Question();
  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
    this.currentUser = this._api.currentUser;
    console.log(this.currentUser, "currentUser from Service");
  }

  createQuestion(){
    console.log(this.question, "dataform");
    this._api.createQuestion(this.question)
    this._router.navigate(['/dashboard'])
    this.question = new Question();
  }

  logout(){
    this._api.logOut();
    this._router.navigate([''])
  }

}
