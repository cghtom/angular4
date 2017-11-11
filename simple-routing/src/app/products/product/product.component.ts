import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId:string;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe(map => {
      this.productId = map.get('id');
      console.log("this.productId : ", this.productId);
    });
  }

  ngOnInit() {
  }

}
