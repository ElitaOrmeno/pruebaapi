import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  products: any;
  addedProducts = [];
  isEmpty: boolean = true;
  counter: number = 0;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProducts()
      .subscribe( res => this.products = res );
  }

  addToCart(id) {
    this.apiService.getProductById(id)
      .subscribe( res => {
        this.insertIntoCart(res);
      });
  }

  insertIntoCart(product) {
    let {image, name, price } = product;
    this.addedProducts.push({image, name, price});
    this.counter++;
    this.isEmpty = false;
  }
    
}
