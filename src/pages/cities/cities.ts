import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { SharedService } from '../../common/shared.service';

@Component({
    selector: 'page-cities',
    templateUrl: 'cities.html'
})
export class CitiesPage {
    popularCities = ['BANGALORE', 'PUNE', 'DELHI NCR', 'MUMBAI', 'CHENNAI', 'HYDERABAD', 'CHANDIGARH', 'KOLKATA'];
    otherCities = ['AHMEDABAD', 'COIMBATORE', 'INDOR', 'JAIPUR', 'LUDHIANA', 'MANGALORE-MANIPAL',
        'MYSORE', 'VIZAG', 'NAGPUR', 'KOCHI', 'VIJAYAWADA-GUNTUR', 'TIRUPATHI'];
    popopularCitiesCopy: any;
    otherCitiesCopy: any;
    selectedCity: string = 'city';

    constructor(public navCtrl: NavController, 
        public viewCtrl: ViewController,
        private sharedService: SharedService) {
        this.popopularCitiesCopy = this.popularCities;
        this.otherCitiesCopy = this.otherCities;
        if(this.sharedService.selectedCity !== 'city') this.selectedCity = this.sharedService.selectedCity;
    }

    selectCity(city) {
        if (city) this.selectedCity = city;
        this.sharedService.selectedCity = this.selectedCity;
        this.sharedService.startPointAddress = '';
        this.viewCtrl.dismiss({ selectedCity: this.selectedCity });
    }

    gotoHome() {
        //this.navCtrl.push(HomePage)
        this.viewCtrl.dismiss({ selectedCity: this.selectedCity });
    }

    dismissThis() {
        this.viewCtrl.dismiss({ selectedCity: 'city' });
    }

    getSearchingCity(event: any) {
        this.popularCities = this.popopularCitiesCopy;
        this.otherCities = this.otherCitiesCopy;
        const searchValue = event.target.value;
        if (searchValue === '') return 0;

        let tempArray1 = [];
        for (let city of this.popularCities) {
            if (city.toLowerCase().includes(searchValue.toLowerCase())) {
                tempArray1.push(city);
            }
        }
        this.popularCities = tempArray1;

        let tempArray2 = [];
        for (let city of this.otherCities) {
            if (city.toLowerCase().includes(searchValue.toLowerCase())) {
                tempArray2.push(city);
            }
        }
        this.otherCities = tempArray2;
        // this.popularCities.filter((city) => {
        //     city.toLowerCase().includes(serachValue.toLowerCase())
        //     //return city === event.target.valule;
        // });
    }

}
