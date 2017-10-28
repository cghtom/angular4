import {Injectable} from '@angular/core';
import {IPriceService} from './price-service.interface';

@Injectable()
export class PriceServiceFixed6 implements IPriceService {
  constructor(){

  };

  calculateTotalPrice(basePrice:number, state:string): number{

    let tax = basePrice * 0.06;
    return basePrice + tax;
  }
}
