import { Component } from '@angular/core';
import {Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  categoryItems: Product[] = [];
  products: Product[] = products;

  constructor() {
    this.categoryItems = this.products; // Начально отображаем все продукты
  }

  filterByCategory(category: string) {
    if (category === 'All') {
      this.categoryItems = this.products; // Отображаем все продукты
    }
    else {
      this.categoryItems = this.products.filter(product => product.category === category);
    }
  }

  likeProduct(product: Product){
    product.likes++;
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
    this.categoryItems = this.products;
  }

  share(url: string) {
    var sharelink = "https://t.me/share/url?url=" + url;
    window.open(sharelink);
  }

  link(url: string) {
    var sharelink = url;
    window.open(sharelink);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
