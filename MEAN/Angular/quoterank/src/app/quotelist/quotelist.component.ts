import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
   @Input() myQuotes;
   @Output() clearEmitter = new EventEmitter()
   @Output() voteupEmitter = new EventEmitter()
   @Output() votedownEmitter = new EventEmitter()
  constructor() {}

  ngOnInit() {
  }
  voteup(myQuotes){
     this.voteupEmitter.emit(myQuotes);
 }
  votedown(myQuotes){
     this.votedownEmitter.emit(myQuotes);
 }
  clear(myQuotes){
     this.clearEmitter.emit(myQuotes);
 }
}
