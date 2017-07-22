import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CommunicateService } from './../communicate.service';
import { Products } from './../products';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  subscription: Subscription;
  product: Products = new Products();
  products = [];
  constructor(
    private _communicateService: CommunicateService,
    private _router: Router,
  ) {
    // we set this.subscription as a variable because later we will use it to unsubscribe

    // anytime the .next method is invoked by updateProducts method in CommunicateService,
    // .subscribe will invoke. ex/ (onSubmit will call updateProducts)

    // we call the CommunicateService service and use the .subscribe method to
    // subscribe to the productsObservable observable.
    this.subscription = _communicateService.productsObservable.subscribe(
      // the .subscribe method requires 3 callback functions (success/err/successloading)
      (updateProducts) => { this.products = updateProducts }, // this will update the data array to the most current data set
      (err) => { },
      () => { }
    );
    console.log(this._communicateService.productsObservable.getValue());
  }

  onSubmit() {
    this.products.push(this.product);
    // on submit click, call the CommunicateService service and run the updateProducts method
    // and pass the data (this.products) collected from the form submission to updateProducts
    this._communicateService.updateProducts(this.products);
    this.product = new Products();
    this._router.navigate(['/list']);
  }
}
