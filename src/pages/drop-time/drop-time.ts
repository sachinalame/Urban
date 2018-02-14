import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { SharedService } from '../../common/shared.service';

@Component({
    selector: 'page-drop-time',
    templateUrl: 'drop-time.html'
})
export class DropTimePage {
    endDate: String = new Date().toISOString();
    endTime = moment(new Date().toISOString()).format();
    minDate = new Date().toISOString();

    constructor(public navCtrl: NavController,
        public viewCtrl: ViewController,
        private sharedService: SharedService
    ) {
        if (this.sharedService.endDate !== null) this.endDate = new Date(this.sharedService.endDate).toISOString();
        if (this.sharedService.startTime !== null) {
            let startDate: Date = new Date(this.sharedService.startDate);
            let equalEndDate = new Date(startDate).setDate(startDate.getDate());
            this.endDate = new Date(equalEndDate).toISOString();

            let startTime: Date = new Date(this.sharedService.startTime);
            let addHrsEndtime = new Date(startTime).setHours(startTime.getHours() + 5);
            this.endTime = moment(new Date(addHrsEndtime).toISOString()).format();
            this.minDate = moment(new Date(addHrsEndtime).toISOString()).format();

            //this.endTime = moment(new Date(this.sharedService.endTime).toISOString()).format();
        }
    }

    gotoHome() {
        //this.navCtrl.push(HomePage,{endDate:this.endDate})
        this.viewCtrl.dismiss({ endDate: this.endDate, endTime: this.endTime });
    }

}
