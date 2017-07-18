import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr: Array<boolean> = [false, false, false, false, false, false, false, false, false, false];
  toggleSwitch(i){
    switch(i){
      case 0: this.arr[i] = !this.arr[i]; break;
      case 1: this.arr[i] = !this.arr[i]; break;
      case 2: this.arr[i] = !this.arr[i]; break;
      case 3: this.arr[i] = !this.arr[i]; break;
      case 4: this.arr[i] = !this.arr[i]; break;
      case 5: this.arr[i] = !this.arr[i]; break;
      case 6: this.arr[i] = !this.arr[i]; break;
      case 7: this.arr[i] = !this.arr[i]; break;
      case 8: this.arr[i] = !this.arr[i]; break;
      case 9: this.arr[i] = !this.arr[i]; break;
    }
  }
}
