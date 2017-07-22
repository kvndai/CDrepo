import { Injectable } from '@angular/core';
import { Products } from './products';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicateService {
  // creates new observable
  productsObservable = new BehaviorSubject(null);
  // updates observable on this function call
  updateProducts(products: Array<Products>){
    this.productsObservable.next(products)
  }

}
