import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import * as moment from 'moment';
import { SharedService } from '../../common/shared.service';
//import 'moment-duration-format';

@Component({
    selector: 'page-start-time',
    templateUrl: 'start-time.html'
})
export class StartTimePage {
    startDate = new Date().toISOString();
    minDate = new Date().toISOString();
    //startTime = new Date().toISOString();
    //startDate = moment(new Date().toISOString()).format('MM/DD/YYYY');
    startTime = moment(new Date().toISOString()).format();

    constructor(public navCtrl: NavController,
        public viewCtrl: ViewController,
        private sharedService: SharedService
    ) {
        if (this.sharedService.startDate !== null) this.startDate = new Date(this.sharedService.startDate).toISOString();
        if (this.sharedService.startTime !== null) this.startTime = moment(new Date(this.sharedService.startTime).toISOString()).format();
    }

    gotoHome() {
        //this.navCtrl.push(HomePage,{startDate:this.startDate})
        this.viewCtrl.dismiss({ startDate: this.startDate, startTime: this.startTime });
    }

}
