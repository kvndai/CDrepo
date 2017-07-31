import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../api.service';
import { Answer } from '../answer'

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  currentUser;
  answer = new Answer();
  constructor(private _api: ApiService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = this._api.currentUser;
    console.log(this.currentUser, "currentUser from Service");
  }

  createAnswer(){
    console.log(this.answer, "dataform");
    this._api.createAnswer(this.answer)
    this._router.navigate(['/dashboard'])
    this.answer = new Answer();
  }
}
