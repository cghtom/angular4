import {Injectable} from '@angular/core';
import {IPriceService} from './price-service.interface';

@Injectable()
export class PriceServiceRandom implements IPriceService {
  constructor(){

  };

  calculateTotalPrice(basePrice:number, state:string): number{

    let tax = Math.random();
    return basePrice + tax;
  }
}
