import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CitiesPage } from '../pages/cities/cities';
import { StartTimePage } from '../pages/start-time/start-time';
import { DropTimePage } from '../pages/drop-time/drop-time';
import { LocationPage } from '../pages/location/location';
import { CarListPage } from '../pages/car-list/car-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { GeocoderService } from '../services/geocoder.service';
import { SharedService } from '../common/shared.service';

import { GoogleplaceDirective } from '../directives/google-place-lookup.directive';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CitiesPage,
    StartTimePage,
    DropTimePage,
    LocationPage,
    CarListPage,
    GoogleplaceDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CitiesPage,
    StartTimePage,
    DropTimePage,
    LocationPage,
    CarListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeocoderService,
    SharedService
  ]
})
export class AppModule {}
