import { Injectable } from '@angular/core';
import { Products } from './products';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicateService {
  // creates new observable
  productsObservable = new BehaviorSubject(null);
  // updates observable (products is data sent from the component which called on updateProducts
  updateProducts(products: Array<Products>){
    // .next method simply udates the data in the observable
    this.productsObservable.next(products)
  }

}
