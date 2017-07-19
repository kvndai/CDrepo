import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-power-supersaiyanfour',
  templateUrl: './power-supersaiyanfour.component.html',
  styleUrls: ['./power-supersaiyanfour.component.css']
})
export class PowerSupersaiyanfourComponent implements OnInit {
   @Input() myPower;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.myPower = this.myPower * 500;
  }
}
