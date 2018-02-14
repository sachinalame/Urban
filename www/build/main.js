webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_shared_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CitiesPage = (function () {
    function CitiesPage(navCtrl, viewCtrl, sharedService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.sharedService = sharedService;
        this.popularCities = ['BANGALORE', 'PUNE', 'DELHI NCR', 'MUMBAI', 'CHENNAI', 'HYDERABAD', 'CHANDIGARH', 'KOLKATA'];
        this.otherCities = ['AHMEDABAD', 'COIMBATORE', 'INDOR', 'JAIPUR', 'LUDHIANA', 'MANGALORE-MANIPAL',
            'MYSORE', 'VIZAG', 'NAGPUR', 'KOCHI', 'VIJAYAWADA-GUNTUR', 'TIRUPATHI'];
        this.selectedCity = 'city';
        this.popopularCitiesCopy = this.popularCities;
        this.otherCitiesCopy = this.otherCities;
        if (this.sharedService.selectedCity !== 'city')
            this.selectedCity = this.sharedService.selectedCity;
    }
    CitiesPage.prototype.selectCity = function (city) {
        if (city)
            this.selectedCity = city;
        this.sharedService.selectedCity = this.selectedCity;
        this.sharedService.startPointAddress = '';
        this.viewCtrl.dismiss({ selectedCity: this.selectedCity });
    };
    CitiesPage.prototype.gotoHome = function () {
        //this.navCtrl.push(HomePage)
        this.viewCtrl.dismiss({ selectedCity: this.selectedCity });
    };
    CitiesPage.prototype.dismissThis = function () {
        this.viewCtrl.dismiss({ selectedCity: 'city' });
    };
    CitiesPage.prototype.getSearchingCity = function (event) {
        this.popularCities = this.popopularCitiesCopy;
        this.otherCities = this.otherCitiesCopy;
        var searchValue = event.target.value;
        if (searchValue === '')
            return 0;
        var tempArray1 = [];
        for (var _i = 0, _a = this.popularCities; _i < _a.length; _i++) {
            var city = _a[_i];
            if (city.toLowerCase().includes(searchValue.toLowerCase())) {
                tempArray1.push(city);
            }
        }
        this.popularCities = tempArray1;
        var tempArray2 = [];
        for (var _b = 0, _c = this.otherCities; _b < _c.length; _b++) {
            var city = _c[_b];
            if (city.toLowerCase().includes(searchValue.toLowerCase())) {
                tempArray2.push(city);
            }
        }
        this.otherCities = tempArray2;
        // this.popularCities.filter((city) => {
        //     city.toLowerCase().includes(serachValue.toLowerCase())
        //     //return city === event.target.valule;
        // });
    };
    CitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cities',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\cities\cities.html"*/'<!-- <ion-header>\n\n    <ion-toolbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="close"></ion-icon>\n\n        </button>\n\n        <ion-title>Select your pickup city</ion-title>\n\n    </ion-toolbar>\n\n</ion-header> -->\n\n<ion-header>\n\n    <ion-toolbar color="dark">\n\n        <ion-title>\n\n            Select your pickup city\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismissThis()">\n\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<p>\n\n    cities list goes here...\n\n</p>\n\n<ion-content padding class="vertical-align-content">\n\n    <ion-searchbar (ionInput)="getSearchingCity($event)"></ion-searchbar>\n\n    <h6>POPULAR CITIES</h6>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col *ngFor="let city of popularCities">\n\n                <div class="city-item" (click)="selectCity(city)" [ngClass]="{\'selected-city\':city===selectedCity}">\n\n                    {{city}}\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <h6>OTHER CITIES</h6>\n\n    <ion-list>\n\n        <div class="other-city-item" ion-item *ngFor="let city of otherCities" (click)="selectCity(city)" \n\n        [ngClass]="{\'selected-city\':city===selectedCity}">\n\n            {{city}}\n\n        </div>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\cities\cities.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__common_shared_service__["a" /* SharedService */]])
    ], CitiesPage);
    return CitiesPage;
}());

//# sourceMappingURL=cities.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeocoderService = (function () {
    function GeocoderService(http, _GEOCODE) {
        this.http = http;
        this._GEOCODE = _GEOCODE;
    }
    /**
      *
      * Perform reverseGeocoding operation and return address details
      *
      * @public
      * @method reverseGeocode
      * @return {Promise}
      *
      */
    GeocoderService.prototype.reverseGeocode = function (lat, lng) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._GEOCODE.reverseGeocode(lat, lng)
                .then(function (result) {
                var str = "The reverseGeocode address is " + result.locality + " in " + result.countryCode;
                resolve(str);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    /**
      *
      * Perform forwardGeocode operation and return latitude/longitude details
      *
      * @public
      * @method forwardGeocode
      * @return {Promise}
      *
      */
    GeocoderService.prototype.forwardGeocode = function (keyword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._GEOCODE.forwardGeocode(keyword)
                .then(function (coordinates) {
                var str = "The coordinates are latitude=" + coordinates.latitude + " and longitude=" + coordinates.longitude;
                resolve(str);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    GeocoderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], GeocoderService);
    return GeocoderService;
}());

//# sourceMappingURL=geocoder.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_time_start_time__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drop_time_drop_time__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_location__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__car_list_car_list__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_shared_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, navParams, modalCtrl, sharedService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.sharedService = sharedService;
        this.startDate = null;
        this.startTime = null;
        this.endDate = null;
        this.endTime = null;
        this.startPointAddress = '';
        this.startDate = this.sharedService.startDate;
        this.startTime = this.sharedService.startTime;
        this.endDate = this.sharedService.endDate;
        this.endTime = this.sharedService.endTime;
        this.startPointAddress = this.sharedService.startPointAddress;
    }
    HomePage.prototype.selectLocation = function () {
        var _this = this;
        var modalLoaction = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__location_location__["a" /* LocationPage */]);
        modalLoaction.present();
        modalLoaction.onDidDismiss(function (data) {
            // this.startPointAddress = data.startPointAddress;
            // this.sharedService.startPointAddress = this.startPointAddress;
            _this.startPointAddress = _this.sharedService.startPointAddress;
            console.log(data);
        });
    };
    HomePage.prototype.selectPickupTime = function () {
        var _this = this;
        //this.navCtrl.push(StartTimePage);
        var modalStartTime = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__start_time_start_time__["a" /* StartTimePage */]);
        modalStartTime.present();
        modalStartTime.onDidDismiss(function (data) {
            _this.startDate = data.startDate;
            _this.startTime = data.startTime;
            _this.sharedService.startDate = _this.startDate;
            _this.sharedService.startTime = _this.startTime;
            _this.endDate = null;
            _this.endTime = null;
            console.log(data);
        });
    };
    HomePage.prototype.selectDropoffTime = function () {
        var _this = this;
        //this.navCtrl.push(DropTimePage);
        var modalDropTime = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__drop_time_drop_time__["a" /* DropTimePage */]);
        modalDropTime.present();
        modalDropTime.onDidDismiss(function (data) {
            _this.endDate = data.endDate;
            _this.endTime = data.endTime;
            _this.sharedService.endDate = _this.endDate;
            _this.sharedService.endTime = _this.endTime;
            console.log(data);
        });
    };
    HomePage.prototype.findCars = function () {
        var modalFindCars = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__car_list_car_list__["a" /* CarListPage */]);
        modalFindCars.present();
        modalFindCars.onDidDismiss(function (data) {
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="bg-image-view">\n  <button ion-button color="dark" clear icon-only menuToggle>\n    <ion-icon name=\'menu\' is-active="false"></ion-icon>\n  </button>\n  <span class="banner1">TO TRAVEL IS </span>\n  <span class="banner2">TO LIVE</span>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button *ngIf="startPointAddress===\'\'" ion-button block color="light" icon-start (click)="selectLocation()">\n            <ion-icon name="locate"></ion-icon>\n            Select your starting point\n          </button>\n          <ion-card style="cursor:pointer;width:100%;" *ngIf="startPointAddress!==\'\'" (click)="selectLocation()">\n            <ion-card-content>\n              <strong>Starting Point</strong>\n              {{startPointAddress}}\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <button *ngIf="startDate===null" style="width:100%;" ion-button color="light" icon-start (click)="selectPickupTime()">\n            <ion-icon name="calendar"></ion-icon>\n            Pickup Time\n          </button>\n          <ion-card style="cursor:pointer;width:100%;" *ngIf="startDate!==null" (click)="selectPickupTime()">\n            <ion-card-content>\n              <strong>Start Time</strong>\n              {{startDate | date:\'EEEE, d MMM\'}} {{startTime | date:\'h:mm a\'}}\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6>\n          <button *ngIf="endDate===null" style="width:100%;" ion-button color="light" icon-start (click)="selectDropoffTime()">\n            <ion-icon name="calendar"></ion-icon>\n            Dropoff Time\n          </button>\n          <ion-card style="cursor:pointer;width:100%;" *ngIf="endDate!==null" (click)="selectDropoffTime()">\n            <ion-card-content>\n              <strong>End Time</strong>\n              {{endDate | date:\'EEEE, d MMM\'}} {{endTime | date:\'h:mm a\'}}\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row justify-content-center>\n        <ion-col col-6 style="margin-top:15px;">\n          <!-- <button [disabled]="startPointAddress===\'\' || startDate===null || endDate===null" ion-button color="secondary" icon-start\n            (click)="findCars()">\n            FIND CARS\n          </button> -->\n          <button ion-button color="secondary" icon-start (click)="findCars()">\n            FIND CARS\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__common_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_shared_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import 'moment-duration-format';
var StartTimePage = (function () {
    function StartTimePage(navCtrl, viewCtrl, sharedService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.sharedService = sharedService;
        this.startDate = new Date().toISOString();
        this.minDate = new Date().toISOString();
        //startTime = new Date().toISOString();
        //startDate = moment(new Date().toISOString()).format('MM/DD/YYYY');
        this.startTime = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date().toISOString()).format();
        if (this.sharedService.startDate !== null)
            this.startDate = new Date(this.sharedService.startDate).toISOString();
        if (this.sharedService.startTime !== null)
            this.startTime = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date(this.sharedService.startTime).toISOString()).format();
    }
    StartTimePage.prototype.gotoHome = function () {
        //this.navCtrl.push(HomePage,{startDate:this.startDate})
        this.viewCtrl.dismiss({ startDate: this.startDate, startTime: this.startTime });
    };
    StartTimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start-time',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\start-time\start-time.html"*/'<ion-header>\n\n    <ion-toolbar color="dark">\n\n        <ion-title>\n\n            Select your Start Time\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="gotoHome()">\n\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="vertical-align-content">\n\n\n\n    <ion-list>\n\n        <ion-item style="height:200px;">\n\n            <ion-label>START TRIP DATE</ion-label>\n\n            <ion-datetime displayFormat="MMM DD YYYY" [min]="minDate" [(ngModel)]="startDate"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item style="height:200px;">\n\n            <ion-label>START TRIP TIME</ion-label>\n\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="startTime"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block color="secondary" (click)="gotoHome()">Conitnue</button>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\start-time\start-time.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
    ], StartTimePage);
    return StartTimePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=start-time.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_shared_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DropTimePage = (function () {
    function DropTimePage(navCtrl, viewCtrl, sharedService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.sharedService = sharedService;
        this.endDate = new Date().toISOString();
        this.endTime = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date().toISOString()).format();
        this.minDate = new Date().toISOString();
        if (this.sharedService.endDate !== null)
            this.endDate = new Date(this.sharedService.endDate).toISOString();
        if (this.sharedService.startTime !== null) {
            var startDate = new Date(this.sharedService.startDate);
            var equalEndDate = new Date(startDate).setDate(startDate.getDate());
            this.endDate = new Date(equalEndDate).toISOString();
            var startTime = new Date(this.sharedService.startTime);
            var addHrsEndtime = new Date(startTime).setHours(startTime.getHours() + 5);
            this.endTime = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date(addHrsEndtime).toISOString()).format();
            this.minDate = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date(addHrsEndtime).toISOString()).format();
            //this.endTime = moment(new Date(this.sharedService.endTime).toISOString()).format();
        }
    }
    DropTimePage.prototype.gotoHome = function () {
        //this.navCtrl.push(HomePage,{endDate:this.endDate})
        this.viewCtrl.dismiss({ endDate: this.endDate, endTime: this.endTime });
    };
    DropTimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-drop-time',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\drop-time\drop-time.html"*/'<ion-header>\n\n    <ion-toolbar color="dark">\n\n        <ion-title>\n\n            Select your End Time\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="gotoHome()">\n\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="vertical-align-content">\n\n\n\n    <ion-list>\n\n        <ion-item style="height:200px;">\n\n            <ion-label>END TRIP DATE</ion-label>\n\n            <ion-datetime displayFormat="MMM DD YYYY" [min]="minDate" [(ngModel)]="endDate"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item style="height:200px;">\n\n            <ion-label>END TRIP TIME</ion-label>\n\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="endTime"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block color="secondary" (click)="gotoHome()">Conitnue</button>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\drop-time\drop-time.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
    ], DropTimePage);
    return DropTimePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=drop-time.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cities_cities__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geocoder_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_shared_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LocationPage = (function () {
    function LocationPage(navCtrl, viewCtrl, modalCtrl, geolocation, platform, nativeGeocoder, geocoderService, http, sharedService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.geocoderService = geocoderService;
        this.http = http;
        this.sharedService = sharedService;
        this.selectedCity = 'city';
        this.startPointAddress = '';
        this.address = '';
        if (sharedService.selectedCity !== 'city')
            this.selectedCity = this.sharedService.selectedCity;
        if (sharedService.startPointAddress !== '')
            this.startPointAddress = this.sharedService.startPointAddress;
    }
    LocationPage.prototype.selectCity = function () {
        var _this = this;
        var modalSelectCity = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cities_cities__["a" /* CitiesPage */]);
        modalSelectCity.present();
        modalSelectCity.onDidDismiss(function (data) {
            // this.selectedCity = data.selectedCity;
            // this.sharedService.selectedCity = this.selectedCity;
            _this.selectedCity = _this.sharedService.selectedCity;
            console.log(data);
        });
    };
    LocationPage.prototype.getCurrentLoaction = function () {
        var _this = this;
        this.startPointAddress = '';
        this.geolocation.getCurrentPosition().then(function (pos) {
            var currentLatitude = pos.coords.latitude;
            var currentLongitude = pos.coords.longitude;
            //console.log(this.startPointAddress);
            console.log('lat: ' + currentLatitude + ', lon: ' + currentLongitude);
            var googleReverseGeocodeUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + currentLatitude + ',' + currentLongitude + '&sensor=true';
            _this.http.get(googleReverseGeocodeUrl).subscribe(function (data) {
                var resData = data;
                console.log(resData);
                debugger;
                if (resData.status === 'OK') {
                    _this.startPointAddress = resData.results[0].formatted_address;
                    _this.sharedService.startPointAddress = _this.startPointAddress;
                }
                else {
                    //retry();
                    _this.getCurrentLoaction();
                }
            });
        });
    };
    LocationPage.prototype.gotoHome = function () {
        this.viewCtrl.dismiss({ startPointAddress: this.startPointAddress });
    };
    LocationPage.prototype.dismissThisPage = function () {
        this.viewCtrl.dismiss({ startPointAddress: this.startPointAddress });
    };
    LocationPage.prototype.getAddressOnChange = function (event, LocationCtrl) {
        console.log(event.formatted_address);
        this.startPointAddress = event.formatted_address;
        this.sharedService.startPointAddress = this.startPointAddress;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("searchAdrs"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], LocationPage.prototype, "searchAdrs", void 0);
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\location\location.html"*/'<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAWsrBfqfJ1m2ESCI_Ry3uZgdXH7ICrd3A&libraries=places&callback=initAutocomplete"\n\n    async defer></script>\n\n\n\n<ion-header>\n\n    <ion-toolbar color="dark">\n\n        <ion-title>\n\n            Select your location\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismissThisPage()">\n\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="vertical-align-content">\n\n\n\n    <ion-card style="cursor:pointer;" (click)="selectCity()">\n\n        <ion-card-content>\n\n            <span *ngIf="selectedCity===\'city\'">Select your city</span>\n\n            <span *ngIf="selectedCity!==\'city\'">{{selectedCity}}</span>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div *ngIf="selectedCity!==\'city\'">\n\n        <ion-list>\n\n            <ion-item>\n\n                <!-- <ion-label floating style="font-size: small;">Tell us your starting point in {{selectedCity}}</ion-label>\n\n                <ion-input type="text" class="form-control" placeholder="Location" name="Location" [(ngModel)]="address" #LocationCtrl="ngModel"\n\n                Googleplace (setAddress)="getAddressOnChange($event,LocationCtrl)"></ion-input> -->\n\n                <!-- <input type="radio" name="startPoint"> -->\n\n                <input type="text" class="search-location" placeholder="Search Location" name="Location" [(ngModel)]="address" #LocationCtrl="ngModel"\n\n                    Googleplace (setAddress)="getAddressOnChange($event,LocationCtrl)">\n\n            </ion-item>\n\n        </ion-list>\n\n        <br>\n\n        <ion-card style="cursor:pointer;" (click)="getCurrentLoaction()">\n\n            <ion-card-content>\n\n                <!-- <input type="radio" name="startPoint"> -->\n\n                <ion-icon name="locate"></ion-icon> &nbsp;&nbsp;&nbsp;\n\n                <span>Current Location</span>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n\n\n    <ion-card *ngIf="startPointAddress!==\'\'">\n\n        <ion-card-content>\n\n            <span>{{startPointAddress}}</span>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <br>\n\n    <br>\n\n    <button [disabled]="startPointAddress===\'\'" ion-button block color="secondary" (click)="gotoHome()">Conitnue</button>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\location\location.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__services_geocoder_service__["a" /* GeocoderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_geocoder_service__["a" /* GeocoderService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__common_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__common_shared_service__["a" /* SharedService */]) === "function" && _k || Object])
    ], LocationPage);
    return LocationPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_geocoder_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarListPage = (function () {
    function CarListPage(navCtrl, viewCtrl, modalCtrl, geolocation, platform, nativeGeocoder, geocoderService, http) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.geocoderService = geocoderService;
        this.http = http;
        this.carsList = [
            { name: 'Ford Figo', pic: '', noOfSeating: 5, type: 'Sedan' },
            { name: 'Mahendra Xylo', pic: '', noOfSeating: 7, type: 'SUV' },
            { name: 'Maruthi Swift', pic: '', noOfSeating: 4, type: 'Hatchbag' },
            { name: 'Hundayi Verna', pic: '', noOfSeating: 5, type: 'Sedan' },
            { name: 'Toyoto Fortuner', pic: '', noOfSeating: 7, type: 'SUV' },
        ];
    }
    // selectCity() {
    //     let modalSelectCity = this.modalCtrl.create(CitiesPage);
    //     modalSelectCity.present();
    //     modalSelectCity.onDidDismiss(data => {
    //         console.log(data);
    //     });
    // }
    CarListPage.prototype.gotoHome = function () {
        this.viewCtrl.dismiss();
    };
    CarListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car-list',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\car-list\car-list.html"*/'<ion-header>\n\n    <ion-toolbar color="dark">\n\n        <ion-title>\n\n            Select a Car\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="gotoHome()">\n\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="vertical-align-content">\n\n\n\n    <!-- <ion-card style="cursor:pointer;" (click)="selectCity()">\n\n        <ion-card-content>\n\n            <span *ngIf="selectedCity===\'city\'">Select your city</span>\n\n            <span *ngIf="selectedCity!==\'city\'">{{selectedCity}}</span>\n\n        </ion-card-content>\n\n    </ion-card> -->\n\n\n\n    <div *ngFor="let car of carsList">\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <ion-img width="80" height="30" style="background-color: white;" src="../../assets/imgs/demoCar2.png"></ion-img>\n\n                <ul style="display: inline-block;">\n\n                    <li>{{car.name}}</li>\n\n                    <li>{{car.noOfSeating}} seater</li>\n\n                    <li>{{car.type}}</li>\n\n                </ul>\n\n                <div>\n\n                    <button style="height: 2.6rem;float:right;" ion-button color="secondary">Book</button>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\car-list\car-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_4__services_geocoder_service__["a" /* GeocoderService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], CarListPage);
    return CarListPage;
}());

//# sourceMappingURL=car-list.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(350);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
        this.startDate = null;
        this.startTime = null;
        this.endDate = null;
        this.endTime = null;
        this.selectedCity = 'city';
        this.startPointAddress = '';
    }
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cities_cities__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_start_time_start_time__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_drop_time_drop_time__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_location_location__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_car_list_car_list__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_geocoder__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_geocoder_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_shared_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_google_place_lookup_directive__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cities_cities__["a" /* CitiesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_start_time_start_time__["a" /* StartTimePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_drop_time_drop_time__["a" /* DropTimePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_car_list_car_list__["a" /* CarListPage */],
                __WEBPACK_IMPORTED_MODULE_18__directives_google_place_lookup_directive__["a" /* GoogleplaceDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cities_cities__["a" /* CitiesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_start_time_start_time__["a" /* StartTimePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_drop_time_drop_time__["a" /* DropTimePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_car_list_car_list__["a" /* CarListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__services_geocoder_service__["a" /* GeocoderService */],
                __WEBPACK_IMPORTED_MODULE_17__common_shared_service__["a" /* SharedService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cities_cities__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            //{ title: 'List', component: ListPage },
            { title: 'Change City', component: __WEBPACK_IMPORTED_MODULE_5__pages_cities_cities__["a" /* CitiesPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        // debugger;
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title === 'Home') {
            this.nav.setRoot(page.component);
        }
        else {
            var modalPage = this.modalCtrl.create(page.component);
            modalPage.present();
            modalPage.onDidDismiss(function (data) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 206,
	"./af.js": 206,
	"./ar": 207,
	"./ar-dz": 208,
	"./ar-dz.js": 208,
	"./ar-kw": 209,
	"./ar-kw.js": 209,
	"./ar-ly": 210,
	"./ar-ly.js": 210,
	"./ar-ma": 211,
	"./ar-ma.js": 211,
	"./ar-sa": 212,
	"./ar-sa.js": 212,
	"./ar-tn": 213,
	"./ar-tn.js": 213,
	"./ar.js": 207,
	"./az": 214,
	"./az.js": 214,
	"./be": 215,
	"./be.js": 215,
	"./bg": 216,
	"./bg.js": 216,
	"./bm": 217,
	"./bm.js": 217,
	"./bn": 218,
	"./bn.js": 218,
	"./bo": 219,
	"./bo.js": 219,
	"./br": 220,
	"./br.js": 220,
	"./bs": 221,
	"./bs.js": 221,
	"./ca": 222,
	"./ca.js": 222,
	"./cs": 223,
	"./cs.js": 223,
	"./cv": 224,
	"./cv.js": 224,
	"./cy": 225,
	"./cy.js": 225,
	"./da": 226,
	"./da.js": 226,
	"./de": 227,
	"./de-at": 228,
	"./de-at.js": 228,
	"./de-ch": 229,
	"./de-ch.js": 229,
	"./de.js": 227,
	"./dv": 230,
	"./dv.js": 230,
	"./el": 231,
	"./el.js": 231,
	"./en-au": 232,
	"./en-au.js": 232,
	"./en-ca": 233,
	"./en-ca.js": 233,
	"./en-gb": 234,
	"./en-gb.js": 234,
	"./en-ie": 235,
	"./en-ie.js": 235,
	"./en-nz": 236,
	"./en-nz.js": 236,
	"./eo": 237,
	"./eo.js": 237,
	"./es": 238,
	"./es-do": 239,
	"./es-do.js": 239,
	"./es-us": 240,
	"./es-us.js": 240,
	"./es.js": 238,
	"./et": 241,
	"./et.js": 241,
	"./eu": 242,
	"./eu.js": 242,
	"./fa": 243,
	"./fa.js": 243,
	"./fi": 244,
	"./fi.js": 244,
	"./fo": 245,
	"./fo.js": 245,
	"./fr": 246,
	"./fr-ca": 247,
	"./fr-ca.js": 247,
	"./fr-ch": 248,
	"./fr-ch.js": 248,
	"./fr.js": 246,
	"./fy": 249,
	"./fy.js": 249,
	"./gd": 250,
	"./gd.js": 250,
	"./gl": 251,
	"./gl.js": 251,
	"./gom-latn": 252,
	"./gom-latn.js": 252,
	"./gu": 253,
	"./gu.js": 253,
	"./he": 254,
	"./he.js": 254,
	"./hi": 255,
	"./hi.js": 255,
	"./hr": 256,
	"./hr.js": 256,
	"./hu": 257,
	"./hu.js": 257,
	"./hy-am": 258,
	"./hy-am.js": 258,
	"./id": 259,
	"./id.js": 259,
	"./is": 260,
	"./is.js": 260,
	"./it": 261,
	"./it.js": 261,
	"./ja": 262,
	"./ja.js": 262,
	"./jv": 263,
	"./jv.js": 263,
	"./ka": 264,
	"./ka.js": 264,
	"./kk": 265,
	"./kk.js": 265,
	"./km": 266,
	"./km.js": 266,
	"./kn": 267,
	"./kn.js": 267,
	"./ko": 268,
	"./ko.js": 268,
	"./ky": 269,
	"./ky.js": 269,
	"./lb": 270,
	"./lb.js": 270,
	"./lo": 271,
	"./lo.js": 271,
	"./lt": 272,
	"./lt.js": 272,
	"./lv": 273,
	"./lv.js": 273,
	"./me": 274,
	"./me.js": 274,
	"./mi": 275,
	"./mi.js": 275,
	"./mk": 276,
	"./mk.js": 276,
	"./ml": 277,
	"./ml.js": 277,
	"./mr": 278,
	"./mr.js": 278,
	"./ms": 279,
	"./ms-my": 280,
	"./ms-my.js": 280,
	"./ms.js": 279,
	"./mt": 281,
	"./mt.js": 281,
	"./my": 282,
	"./my.js": 282,
	"./nb": 283,
	"./nb.js": 283,
	"./ne": 284,
	"./ne.js": 284,
	"./nl": 285,
	"./nl-be": 286,
	"./nl-be.js": 286,
	"./nl.js": 285,
	"./nn": 287,
	"./nn.js": 287,
	"./pa-in": 288,
	"./pa-in.js": 288,
	"./pl": 289,
	"./pl.js": 289,
	"./pt": 290,
	"./pt-br": 291,
	"./pt-br.js": 291,
	"./pt.js": 290,
	"./ro": 292,
	"./ro.js": 292,
	"./ru": 293,
	"./ru.js": 293,
	"./sd": 294,
	"./sd.js": 294,
	"./se": 295,
	"./se.js": 295,
	"./si": 296,
	"./si.js": 296,
	"./sk": 297,
	"./sk.js": 297,
	"./sl": 298,
	"./sl.js": 298,
	"./sq": 299,
	"./sq.js": 299,
	"./sr": 300,
	"./sr-cyrl": 301,
	"./sr-cyrl.js": 301,
	"./sr.js": 300,
	"./ss": 302,
	"./ss.js": 302,
	"./sv": 303,
	"./sv.js": 303,
	"./sw": 304,
	"./sw.js": 304,
	"./ta": 305,
	"./ta.js": 305,
	"./te": 306,
	"./te.js": 306,
	"./tet": 307,
	"./tet.js": 307,
	"./th": 308,
	"./th.js": 308,
	"./tl-ph": 309,
	"./tl-ph.js": 309,
	"./tlh": 310,
	"./tlh.js": 310,
	"./tr": 311,
	"./tr.js": 311,
	"./tzl": 312,
	"./tzl.js": 312,
	"./tzm": 313,
	"./tzm-latn": 314,
	"./tzm-latn.js": 314,
	"./tzm.js": 313,
	"./uk": 315,
	"./uk.js": 315,
	"./ur": 316,
	"./ur.js": 316,
	"./uz": 317,
	"./uz-latn": 318,
	"./uz-latn.js": 318,
	"./uz.js": 317,
	"./vi": 319,
	"./vi.js": 319,
	"./x-pseudo": 320,
	"./x-pseudo.js": 320,
	"./yo": 321,
	"./yo.js": 321,
	"./zh-cn": 322,
	"./zh-cn.js": 322,
	"./zh-hk": 323,
	"./zh-hk.js": 323,
	"./zh-tw": 324,
	"./zh-tw.js": 324
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 407;

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleplaceDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleplaceDirective = (function () {
    function GoogleplaceDirective(el, model) {
        var _this = this;
        this.model = model;
        this.setAddress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this._el = el.nativeElement;
        this.modelValue = this.model;
        var input = this._el;
        this.autocomplete = new google.maps.places.Autocomplete(input, {});
        google.maps.event.addListener(this.autocomplete, 'place_changed', function () {
            var place = _this.autocomplete.getPlace();
            _this.invokeEvent(place);
        });
    }
    GoogleplaceDirective.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
    };
    GoogleplaceDirective.prototype.onInputChange = function () {
        //console.log(this.model);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]) === "function" && _a || Object)
    ], GoogleplaceDirective.prototype, "setAddress", void 0);
    GoogleplaceDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[Googleplace]',
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */]],
            host: {
                '(input)': 'onInputChange()'
            }
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */]) === "function" && _c || Object])
    ], GoogleplaceDirective);
    return GoogleplaceDirective;
    var _a, _b, _c;
}());

//# sourceMappingURL=google-place-lookup.directive.js.map

/***/ })

},[328]);
//# sourceMappingURL=main.js.map