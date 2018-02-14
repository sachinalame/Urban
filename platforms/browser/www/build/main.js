webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function CitiesPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.popularCities = ['BANGALORE', 'PUNE', 'DELHI NCR', 'MUMBAI', 'CHENNAI', 'HYDERABAD', 'CHANDIGARH', 'KOLKATA'];
        this.otherCities = ['AHMEDABAD', 'COIMBATORE', 'INDOR', 'JAIPUR', 'LUDHIANA', 'MANGALORE-MANIPAL',
            'MYSORE', 'VIZAG', 'NAGPUR', 'KOCHI', 'VIJAYAWADA-GUNTUR', 'TIRUPATHI'];
        this.selectedCity = 'city';
        this.popopularCitiesCopy = this.popularCities;
        this.otherCitiesCopy = this.otherCities;
    }
    CitiesPage.prototype.selectCity = function (city) {
        this.selectedCity = city;
        this.viewCtrl.dismiss({ selectedCity: this.selectedCity });
    };
    CitiesPage.prototype.gotoHome = function () {
        //this.navCtrl.push(HomePage)
        this.viewCtrl.dismiss({ selectedCity: this.selectedCity });
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
            selector: 'page-cities',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\cities\cities.html"*/'<!-- <ion-header>\n\n    <ion-toolbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="close"></ion-icon>\n\n        </button>\n\n        <ion-title>Select your pickup city</ion-title>\n\n    </ion-toolbar>\n\n</ion-header> -->\n\n<ion-header>\n\n    <ion-toolbar color="dark">\n\n        <ion-title>\n\n            Select your pickup city\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="gotoHome()">\n\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<p>\n\n    cities list goes here...\n\n</p>\n\n<ion-content padding class="vertical-align-content">\n\n    <ion-searchbar (ionInput)="getSearchingCity($event)"></ion-searchbar>\n\n    <h6>POPULAR CITIES</h6>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col *ngFor="let city of popularCities">\n\n                <div class="city-item" (click)="selectCity(city)">\n\n                    {{city}}\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <h6>OTHER CITIES</h6>\n\n    <ion-list>\n\n        <div class="other-city-item" ion-item *ngFor="let city of otherCities" (click)="selectCity(city)">\n\n            {{city}}\n\n        </div>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\cities\cities.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], CitiesPage);
    return CitiesPage;
}());

//# sourceMappingURL=cities.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_time_start_time__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drop_time_drop_time__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_location__ = __webpack_require__(198);
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
    function HomePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.startDate = null;
        this.endDate = null;
    }
    HomePage.prototype.selectLocation = function () {
        var modalLoaction = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__location_location__["a" /* LocationPage */]);
        modalLoaction.present();
        modalLoaction.onDidDismiss(function (data) {
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
            console.log(data);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="bg-image-view">\n  <button ion-button color="dark" clear icon-only menuToggle>\n    <ion-icon name=\'menu\' is-active="false"></ion-icon>\n  </button>\n  <span class="banner1">NEVER STOP </span>\n  <span class="banner2">LIVING</span>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block color="light" icon-start (click)="selectLocation()">\n            <ion-icon name="locate"></ion-icon>\n            Select your starting point\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <button style="width:100%;" ion-button color="light" icon-start (click)="selectPickupTime()">\n            <ion-icon name="calendar"></ion-icon>\n            Pickup Time\n          </button>\n          <button style="width:100%;padding:5px;" icon-start (click)="selectPickupTime()">\n            <!-- <span>Wednesday</span> 7 Feb, 04:00 PM  -->\n            {{startDate | date:\'EEEE, d MMM, h:mm a\'}}\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button style="width:100%;" ion-button color="light" icon-start  (click)="selectDropoffTime()">\n            <ion-icon name="calendar"></ion-icon>\n            Dropoff Time\n          </button>\n          <button style="width:100%;padding:5px;" icon-start (click)="selectDropoffTime()">\n            <!-- <span>Wednesday</span> 7 Feb, 04:00 PM  -->\n            {{endDate | date:\'EEEE, d MMM, h:mm a\'}}\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row justify-content-center>\n        <ion-col col-6 style="margin-top:15px;">\n          <button ion-button color="secondary" icon-start>\n            FIND CARS\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartTimePage = (function () {
    function StartTimePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.startDate = new Date().toISOString();
    }
    StartTimePage.prototype.gotoHome = function () {
        //this.navCtrl.push(HomePage,{startDate:this.startDate})
        this.viewCtrl.dismiss({ startDate: this.startDate });
    };
    StartTimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start-time',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\start-time\start-time.html"*/'<ion-header>\n\n    <ion-toolbar color="dark">\n\n        <ion-title>\n\n            Select your Start Time\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="gotoHome()">\n\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="vertical-align-content">\n\n\n\n    <ion-list>\n\n        <ion-item style="height:200px;">\n\n            <ion-label>START TRIP DATE</ion-label>\n\n            <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="startDate"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item style="height:200px;">\n\n            <ion-label>START TRIP TIME</ion-label>\n\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="startDate"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block color="secondary" (click)="gotoHome()">Conitnue</button>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\start-time\start-time.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], StartTimePage);
    return StartTimePage;
}());

//# sourceMappingURL=start-time.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function DropTimePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.endDate = new Date().toISOString();
    }
    DropTimePage.prototype.gotoHome = function () {
        //this.navCtrl.push(HomePage,{endDate:this.endDate})
        this.viewCtrl.dismiss({ endDate: this.endDate });
    };
    DropTimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-drop-time',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\drop-time\drop-time.html"*/'<ion-header>\n\n    <ion-toolbar color="dark">\n\n        <ion-title>\n\n            Select your End Time\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="gotoHome()">\n\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="vertical-align-content">\n\n\n\n    <ion-list>\n\n        <ion-item style="height:200px;">\n\n            <ion-label>END TRIP DATE</ion-label>\n\n            <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="endDate"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item style="height:200px;">\n\n            <ion-label>END TRIP TIME</ion-label>\n\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="endDate"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block color="secondary" (click)="gotoHome()">Conitnue</button>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\drop-time\drop-time.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], DropTimePage);
    return DropTimePage;
}());

//# sourceMappingURL=drop-time.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cities_cities__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(200);
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
    function LocationPage(navCtrl, viewCtrl, modalCtrl, geolocation, platform, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.selectedCity = 'city';
    }
    LocationPage.prototype.selectCity = function () {
        var _this = this;
        var modalSelectCity = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cities_cities__["a" /* CitiesPage */]);
        modalSelectCity.present();
        modalSelectCity.onDidDismiss(function (data) {
            _this.selectedCity = data.selectedCity;
            console.log(data);
        });
    };
    LocationPage.prototype.getCurrentLoaction = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (pos) {
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            _this.nativeGeocoder.reverseGeocode(pos.coords.latitude, pos.coords.longitude)
                .then(function (result) { return console.log(JSON.stringify(result)); })
                .catch(function (error) { return console.log(error); });
        });
    };
    LocationPage.prototype.gotoHome = function () {
        this.viewCtrl.dismiss();
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\pages\location\location.html"*/'<ion-header>\n\n    <ion-toolbar color="dark">\n\n        <ion-title>\n\n            Select your location\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="gotoHome()">\n\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="vertical-align-content">\n\n\n\n    <ion-card style="cursor:pointer;" (click)="selectCity()">\n\n        <ion-card-content>\n\n            <span *ngIf="selectedCity==\'city\'">Select your city</span>\n\n            <span *ngIf="selectedCity!=\'city\'">{{selectedCity}}</span>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card style="cursor:pointer;">\n\n        <ion-card-content>\n\n            <span>Tell us your starting point in {{selectedCity}}</span>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card style="cursor:pointer;" (click)="getCurrentLoaction()">\n\n        <ion-card-content>\n\n            <span>Current Location</span>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card style="cursor:pointer;">\n\n        <ion-card-content>\n\n            <span>{{currentLocation}}</span>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <button ion-button block color="secondary" (click)="gotoHome()">Conitnue</button>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\pages\location\location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cities_cities__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_start_time_start_time__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_drop_time_drop_time__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_location_location__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__ = __webpack_require__(200);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cities_cities__["a" /* CitiesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_start_time_start_time__["a" /* StartTimePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_drop_time_drop_time__["a" /* DropTimePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_location_location__["a" /* LocationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cities_cities__["a" /* CitiesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_start_time_start_time__["a" /* StartTimePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_drop_time_drop_time__["a" /* DropTimePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_location_location__["a" /* LocationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cities_cities__ = __webpack_require__(100);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Change City', component: __WEBPACK_IMPORTED_MODULE_6__pages_cities_cities__["a" /* CitiesPage */] }
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
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ionic\UrbanCarDemoApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\Ionic\UrbanCarDemoApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map