import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../api.service';
import { Question } from '../question'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  subscription: Subscription;
  id = null;
  question = new Question();
  answers = []
  constructor(private _api: ApiService, private _router: Router, private _route: ActivatedRoute) {
    this._route.params.subscribe(
      (param) => {
      this.id = param.id;
      console.log('EditComponent loaded and url id given is:', param);
    })
  }

  ngOnInit() {
    this.findOne();
    this.findAnswer();
  }

  findOne(){
    this._api.findOne(this.id)
    .then((data) => {
        console.log(data, "DB data of question.");
        this.question = data; })
      .catch((err) => { console.log(err); });
  }

  findAnswer(){
    this._api.findAnswer()
    .then((data) => {
        console.log(data, "DB data of all answers.");
        this.answers = data; })
      .catch((err) => { console.log(err); });
  }
}
