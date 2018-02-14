import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StartTimePage } from '../start-time/start-time';
import { DropTimePage } from '../drop-time/drop-time';
import { ModalController } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { CarListPage } from '../car-list/car-list';
import { SharedService } from '../../common/shared.service';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  startDate: Date = null;
  startTime: Date = null;
  endDate: Date = null;
  endTime: Date = null;
  startPointAddress: any = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private sharedService: SharedService
  ) {
    this.startDate = this.sharedService.startDate;
    this.startTime = this.sharedService.startTime;
    this.endDate = this.sharedService.endDate;
    this.endTime = this.sharedService.endTime;
    this.startPointAddress = this.sharedService.startPointAddress;
  }
  selectLocation() {
    let modalLoaction = this.modalCtrl.create(LocationPage);
    modalLoaction.present();
    modalLoaction.onDidDismiss(data => {
      // this.startPointAddress = data.startPointAddress;
      // this.sharedService.startPointAddress = this.startPointAddress;

      this.startPointAddress = this.sharedService.startPointAddress
      console.log(data);
    });
  }

  selectPickupTime() {
    //this.navCtrl.push(StartTimePage);
    let modalStartTime = this.modalCtrl.create(StartTimePage);
    modalStartTime.present();
    modalStartTime.onDidDismiss(data => {
      this.startDate = data.startDate;
      this.startTime = data.startTime;
      this.sharedService.startDate = this.startDate;
      this.sharedService.startTime = this.startTime;
      this.endDate = null;
      this.endTime = null;
      console.log(data);
    });
  }
  selectDropoffTime() {
    //this.navCtrl.push(DropTimePage);
    let modalDropTime = this.modalCtrl.create(DropTimePage);
    modalDropTime.present();
    modalDropTime.onDidDismiss(data => {
      this.endDate = data.endDate;
      this.endTime = data.endTime
      this.sharedService.endDate = this.endDate;
      this.sharedService.endTime = this.endTime;
      console.log(data);
    });
  }

  findCars() {
    let modalFindCars = this.modalCtrl.create(CarListPage);
    modalFindCars.present();
    modalFindCars.onDidDismiss(data => {

    });
  }
}
