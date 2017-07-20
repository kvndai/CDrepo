import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   quote = new Quote();
   quotes = [];
   onSubmit(){
    this.quotes.push(this.quote);
    this.quote = new Quote();
  }
  clearQuote(data){
     console.log(data);
     const idx = this.quotes.indexOf(data);
     this.quotes.splice(idx, 1);
 }
 voteupQuote(data){
    data.rating += 1;
}
 votedownQuote(data){
    data.rating -= 1;
}
}
