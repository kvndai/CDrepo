import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-power-human',
  templateUrl: './power-human.component.html',
  styleUrls: ['./power-human.component.css']
})
export class PowerHumanComponent implements OnInit {
   @Input() myPower;
  constructor() { }

  ngOnInit() {
  }

}
