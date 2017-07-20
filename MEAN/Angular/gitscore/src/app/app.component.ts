import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  constructor(private _httpService: HttpService) { }

  onCalculate() {
    this._httpService.retrieveTasks(this.username)
      .then(user => { return user; })
      .catch(err => { console.log(err); })

  }
}
