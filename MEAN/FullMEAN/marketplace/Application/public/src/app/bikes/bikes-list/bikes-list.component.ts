import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bicycle } from '../../bicycle';
import { User } from '../../user';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../../communication.service';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.css']
})
export class BikesListComponent implements OnInit {
  allBikes: Array<Bicycle>;
  contact = { name: '', email: '' };
  currentUserId: string;
  searchStr: string = '';
  subscription: Subscription;
  constructor(private _api: ApiService, private _subApi: ApiService) {
    _subApi.updateBikes(this.allBikes);
    this.subscription = _subApi.bikeObservable.subscribe(
      (updateBikes) => { this.allBikes = updateBikes },
      (err) => { },
      () => { }
    )
   }

  ngOnInit() {
    this.getAllBikes();
    this._api.getCurrentUser()
    .then((user) => { this.currentUserId = user.id; })
    .catch((err) => { console.log(err); });
  }

  getAllBikes() {
    console.log("client component getting bikes data");
    this._api.getAllBikes()
      .then((bikes) => {
        console.log(bikes, "DB data of allBikes.");
        this.allBikes = bikes; })
      .catch((err) => { console.log(err); });
  }

  getContactInfo(user_id) {
    this._api.getContactInfo({id: user_id})
    .then((info) => {
      this.contact.name = info.name;
      this.contact.email = info.email;
      let modal = document.getElementById('contactModal');
    })
    .catch((err) => { console.log("error", err); });
  }

  deleteBike(bike) {
    this._api.deleteBike(bike)
    .then(() => { this.getAllBikes(); })
    .catch((err) => { console.log(err); });
  }

  closeModal() {
    let modal = document.getElementById('contactModal');
    modal.style.display = "none";
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
