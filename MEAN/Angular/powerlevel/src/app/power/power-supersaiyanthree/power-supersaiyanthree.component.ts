import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-power-supersaiyanthree',
  templateUrl: './power-supersaiyanthree.component.html',
  styleUrls: ['./power-supersaiyanthree.component.css']
})
export class PowerSupersaiyanthreeComponent implements OnInit {
   @Input() myPower;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.myPower = this.myPower * 250;
  }
}
