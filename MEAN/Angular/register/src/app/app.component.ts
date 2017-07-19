import { Component } from '@angular/core';
import { User } from './user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  success = '';
  user = new User();
  users = [];
  onSubmit() {
    this.success = 'Thank you for registering with us ' + this.user.firstName + '. We just sent you a confirmation email at ' + this.user.email + ', and we will send all mail to ' + this.user.street + ', ' + this.user.city + ' ' + this.user.state + '.';
    this.users.push(this.user);
    console.log(this.users);
    this.user = new User();
  }
}
