import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formSubmit: boolean = null;
  username: string = '';
  userExist: boolean = null;
  userScore: null;
  constructor(private _httpService: HttpService) { }

  onCalculate() {
    this.userScore = null;
    this._httpService.retrieveTasks(this.username)
      .then((user) => {
        if (user.id) {
          console.log(user)
          this.userExist = true;
          this.userScore = user.public_repos + user.followers;
          console.log(this.userScore);
        }
      })
      .catch(err => {
        this.formSubmit = true;
        console.log(err);
      })
  }
}
