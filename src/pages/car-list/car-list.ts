import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { CitiesPage } from '../cities/cities';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { GeocoderService } from '../../services/geocoder.service';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'page-car-list',
    templateUrl: 'car-list.html'
})
export class CarListPage {
    carsList: any = [
        { name: 'Ford Figo', pic: '', noOfSeating: 5, type: 'Sedan' },
        { name: 'Mahendra Xylo', pic: '', noOfSeating: 7, type: 'SUV' },
        { name: 'Maruthi Swift', pic: '', noOfSeating: 4, type: 'Hatchbag' },
        { name: 'Hundayi Verna', pic: '', noOfSeating: 5, type: 'Sedan' },
        { name: 'Toyoto Fortuner', pic: '', noOfSeating: 7, type: 'SUV' },
    ];

    constructor(public navCtrl: NavController,
        public viewCtrl: ViewController,
        public modalCtrl: ModalController,
        private geolocation: Geolocation,
        private platform: Platform,
        private nativeGeocoder: NativeGeocoder,
        private geocoderService: GeocoderService,
        private http: HttpClient
    ) {
    }

    // selectCity() {
    //     let modalSelectCity = this.modalCtrl.create(CitiesPage);
    //     modalSelectCity.present();
    //     modalSelectCity.onDidDismiss(data => {
    //         console.log(data);
    //     });
    // }

    gotoHome() {
        this.viewCtrl.dismiss();
    }

}
