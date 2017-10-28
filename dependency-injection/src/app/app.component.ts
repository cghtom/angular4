import { Component , ReflectiveInjector, Inject} from '@angular/core';
import { Product } from './model/product.model';
import { PriceServiceRandom } from './services/price-service-random';
import { PriceServiceFixed } from './services/price-service-fixed';

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
  constructor(service2 : PriceServiceFixed, @Inject('TITLE')private title){
    let injector:any = ReflectiveInjector.resolveAndCreate([PriceServiceRandom]);
    let service :PriceServiceRandom = injector.get(PriceServiceRandom);

    this.products= [new Product(service,100), new Product(service2,200)];
  }
}
