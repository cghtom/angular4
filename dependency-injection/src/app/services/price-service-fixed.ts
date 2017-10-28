import {Injectable} from '@angular/core';
import {IPriceService} from './price-service.interface';

@Injectable()
export class PriceServiceFixed implements IPriceService {
  constructor(){

  };

  calculateTotalPrice(basePrice:number, state:string): number{

    let tax = basePrice * 0.21;
    return basePrice + tax;
  }
}
