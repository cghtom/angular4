import {IPriceService} from '../services/price-service.interface';

export class Product {
    priceService:IPriceService;
    basePrice:number;

    constructor(service: IPriceService, basePrice: number) {
      this.priceService = service;
      this.basePrice = basePrice;
    }

    totalPrice(state:string):number{
      return this.priceService.calculateTotalPrice(this.basePrice, state);
    }

}
