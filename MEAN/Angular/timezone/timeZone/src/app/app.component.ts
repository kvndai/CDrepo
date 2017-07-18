import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   date: any = '';
   btn_color: any[] = [false, false, false, false, false]
   datePST(){
      this.date = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
      this.btn_color = [true, false, false, false, false]
   }
   dateMST(){
      this.date = new Date().toLocaleString("en-US", {timeZone: "America/Denver"})
      this.btn_color = [false, true, false, false, false]
   }
   dateCST(){
      this.date = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"})
      this.btn_color = [false, false, true, false, false]
   }
   dateEST(){
      this.date = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
      this.btn_color = [false, false, false, true, false]
   }
   clear(){
      this.date = '';
      this.btn_color = [false, false, false, false, false]
   }

}
