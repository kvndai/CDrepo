import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-power-supersaiyantwo',
  templateUrl: './power-supersaiyantwo.component.html',
  styleUrls: ['./power-supersaiyantwo.component.css']
})
export class PowerSupersaiyantwoComponent implements OnInit {
   @Input() myPower;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.myPower = this.myPower * 150;
  }
}
