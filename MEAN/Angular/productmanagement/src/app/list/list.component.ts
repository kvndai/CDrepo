import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CommunicateService } from './../communicate.service';
import { Products } from './../products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnDestroy {
  subscription: Subscription;
  products = [];
  constructor(
    private _communicateService: CommunicateService,
    private _router: Router,
  ) {
    this.subscription = _communicateService.productsObservable.subscribe(
      (observabledata) => { this.products = observabledata },
      (err) => { },
      () => { }
    );
    console.log('Obeservable data', this._communicateService.productsObservable.getValue());
  }

  delete(data){
    console.log(data);
    this.products.splice(data, 1);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}
