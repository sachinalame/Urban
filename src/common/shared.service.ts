import { Injectable } from '@angular/core';


@Injectable()
export class SharedService {

    startDate: Date = null;
    startTime: Date = null;
    endDate: Date = null;
    endTime: Date = null;
    selectedCity: string = 'city';
    startPointAddress: any = '';

   constructor()
   {

   }

}