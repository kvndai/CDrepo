import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CommunicateService } from './../communicate.service';
import { Products } from './../products';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnDestroy {

  subscription: Subscription;
  product = new Products();
  products = [];
  id: any;

  constructor(
    private _communicateService: CommunicateService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.subscription = _communicateService.productsObservable.subscribe(
      (observabledata) => { this.products = observabledata },
      (err) => { },
      () => { }
    ),

    this._route.params.subscribe(
      (param) => {
      this.id = param.id;
      console.log('EditComponent loaded and url id given is:', param);
      console.log('Obeservable data', this._communicateService.productsObservable.getValue());
    })
  }

  ngOnDestroy() {
    
  }

}
