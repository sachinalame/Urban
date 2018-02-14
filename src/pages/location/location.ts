import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { CitiesPage } from '../cities/cities';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { GeocoderService } from '../../services/geocoder.service';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { SharedService } from '../../common/shared.service';
// import { google.maps } from '@types/googlemaps';

declare var google: any;

@Component({
    selector: 'page-location',
    templateUrl: 'location.html'
})
export class LocationPage {
    selectedCity: string = 'city';
    currentLocation: any;
    startPointAddress: any = '';
    address: any = '';

    @ViewChild("searchAdrs")
    public searchAdrs: ElementRef;

    constructor(
        public navCtrl: NavController,
        public viewCtrl: ViewController,
        public modalCtrl: ModalController,
        private geolocation: Geolocation,
        private platform: Platform,
        private nativeGeocoder: NativeGeocoder,
        private geocoderService: GeocoderService,
        private http: HttpClient,
        private sharedService: SharedService
    ) {
        if (sharedService.selectedCity !== 'city') this.selectedCity = this.sharedService.selectedCity;
        if (sharedService.startPointAddress !== '') this.startPointAddress = this.sharedService.startPointAddress;
    }

    selectCity() {
        let modalSelectCity = this.modalCtrl.create(CitiesPage);
        modalSelectCity.present();
        modalSelectCity.onDidDismiss(data => {
            // this.selectedCity = data.selectedCity;
            // this.sharedService.selectedCity = this.selectedCity;
            this.selectedCity = this.sharedService.selectedCity;
            console.log(data);
        });
    }

    getCurrentLoaction() {
        this.startPointAddress = '';
        this.geolocation.getCurrentPosition().then(pos => {
            let currentLatitude: any = pos.coords.latitude;
            let currentLongitude: any = pos.coords.longitude;
            //console.log(this.startPointAddress);
            console.log('lat: ' + currentLatitude + ', lon: ' + currentLongitude);

            let googleReverseGeocodeUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + currentLatitude + ',' + currentLongitude + '&sensor=true';

            this.http.get(googleReverseGeocodeUrl).subscribe(data => {
                let resData: any = data;
                console.log(resData);
                debugger;
                if (resData.status === 'OK') {
                    this.startPointAddress = resData.results[0].formatted_address;
                    this.sharedService.startPointAddress = this.startPointAddress;
                } else {
                    //retry();
                    this.getCurrentLoaction();
                }
            });
        });
    }
    gotoHome() {
        this.viewCtrl.dismiss({ startPointAddress: this.startPointAddress });
    }

    dismissThisPage() {
        this.viewCtrl.dismiss({ startPointAddress: this.startPointAddress });
    }

    getAddressOnChange(event, LocationCtrl) {
        console.log(event.formatted_address);
        this.startPointAddress = event.formatted_address;
        this.sharedService.startPointAddress = this.startPointAddress;
    }
}
