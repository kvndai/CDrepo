import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-power-saiyan',
  templateUrl: './power-saiyan.component.html',
  styleUrls: ['./power-saiyan.component.css']
})
export class PowerSaiyanComponent implements OnInit {
   @Input() myPower;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.myPower = this.myPower * 10;
  }
}
