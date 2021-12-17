import { Component, OnInit } from '@angular/core';
import productData from '../product.json';
interface Product {
      subcategory: String,
      title: String,
      price: String,
      popularity: String
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];
  constructor() { 
    // let products = [];
    // Object.keys(productData.products).map(id => {this.products.push(productData.products[id])})
  }

  ngOnInit(): void {
    // let products = [];
    Object.keys(productData.products).map(id => {this.products.push(productData.products[id])})
  }

}
