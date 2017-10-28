import { Component , ReflectiveInjector, Inject} from '@angular/core';
import { Product } from './model/product.model';
import { PriceServiceRandom } from './services/price-service-random';
import { PriceServiceFixed21 } from './services/price-service-fixed21';
import { IPriceService } from './services/price-service.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Product[];

  /**
  * service2 is provided in app.model.ts and injected here by framework
  * service is injected manually (in stead of having angular do it for you)
  *
  * the title is a value being injected (see app.module.ts) and because
  * we are using private ... it is set as a member property (this.property)
  * and can be used in html template
  */
  constructor(service21 : PriceServiceFixed21, @Inject('priceService6') priceService6: IPriceService ,@Inject('TITLE')private title){
    let injector:any = ReflectiveInjector.resolveAndCreate([PriceServiceRandom]);
    let serviceRandom :PriceServiceRandom = injector.get(PriceServiceRandom);

    this.products= [new Product(serviceRandom,100), new Product(service21,200), new Product(priceService6,200)];
  }
}
