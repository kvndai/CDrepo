import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe((param) => {
      console.log('EditComponent loaded and url id given is:', param.id);
    })
  }

  ngOnInit() {
  }

}
