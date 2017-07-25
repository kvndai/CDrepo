import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Bicycle } from '../../bicycle';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../../communication.service';


@Component({
  selector: 'app-bikes-user',
  templateUrl: './bikes-user.component.html',
  styleUrls: ['./bikes-user.component.css']
})
export class BikesUserComponent implements OnInit {
  subscription: Subscription;
  newBike: Bicycle = new Bicycle();
  hasImage: boolean = false;
  myBikes: Array<Bicycle>;

  constructor(private _api: ApiService, private _subApi: ApiService) {
    this.subscription = _subApi.bikeObservable.subscribe(
      (updateBikes) => { this.myBikes = updateBikes },
      (err) => { },
      () => { }
    )
  }

  ngOnInit() {
    this.getBikes();
  }

  linkPhoto() {
    this.newBike.image = prompt("Please enter the url for your photo:");
    if (this.newBike.image != "") {
      this.hasImage = true;
    }
  }

  addBike() {
    console.log(this.newBike, "Create newBike form data submit");
    this._api.addBike(this.newBike)
    .then(() => { this.getBikes(); })
    .catch((err) => { console.log(err); });
  }

  getBikes(){
    this._api.getAllUserBikes()
    .then((bikes) => {
      console.log(bikes, "DB data of allUserBikes.");
      this.myBikes = bikes;
      console.log(this.myBikes);
    })
    .catch((err) => { console.log(err); });
  }

  editPhoto(i) {
    this.myBikes[i].image = prompt("Please enter the new url for your photo:");
  }

  updateBike(i) {
    this._api.updateBike(this.myBikes[i])
    .then(() => { this.getBikes(); })
    .catch((err) => { console.log(err); });
  }

  deleteBike(i) {
    this._api.deleteBike(this.myBikes[i])
    .then(() => { this.getBikes(); })
    .catch((err) => { console.log(err); });
  }
}
