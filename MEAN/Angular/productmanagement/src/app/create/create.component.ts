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
  product = new Products();
  products = [];
  constructor(
    private _communicateService: CommunicateService,
    private _router: Router,
  ) {
    this.subscription = _communicateService.productsObservable.subscribe(
      (updateProducts) => { this.products = updateProducts },
      (err) => { },
      () => { }
    )
  }

  onSubmit() {
    this.products.push(this.product);
    this._communicateService.updateProducts(this.products);
    this.product = new Products();
    this._router.navigate(['/list']);

  }
}
