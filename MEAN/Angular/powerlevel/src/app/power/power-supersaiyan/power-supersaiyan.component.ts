import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-power-supersaiyan',
  templateUrl: './power-supersaiyan.component.html',
  styleUrls: ['./power-supersaiyan.component.css']
})
export class PowerSupersaiyanComponent implements OnInit {
   @Input() myPower;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.myPower = this.myPower * 90;
  }
}
