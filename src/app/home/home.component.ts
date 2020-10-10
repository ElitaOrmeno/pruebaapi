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
  hasError: boolean = false;
  showErrorMsg: string = 'An error ocurred, please try again later';

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProducts()
      .subscribe(
        res => this.products = res,
        error => this.hasError = true
      );
  }

  addToCart(id) {
    this.apiService.getProductById(id)
      .subscribe( 
        res => this.insertIntoCart(res), 
        error => {
          this.hasError = true;
          this.scrollToTop();
        }
      );
  }

  insertIntoCart(product) {
    let { image, name, price } = product;
    this.addedProducts.push({image, name, price});
    this.counter++;
    this.isEmpty = false;
    this.scrollToTop();
  }

  scrollToTop() {
    document.getElementById('top').scrollIntoView({behavior: "smooth"});
  }
}
