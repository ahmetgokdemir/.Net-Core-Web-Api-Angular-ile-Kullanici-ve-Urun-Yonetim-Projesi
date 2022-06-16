import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: any; //***
  @Input() products: Product[] = []; //*** products.component.html'den gelecek => <product-details [product]="selectedProduct" [products]="products"></product-details>

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(id: any, name: string,price: any,isactive: boolean) // id ve price number yerine any ile değiştirildi..
  {
      console.log(id);
      //console.log(name);
      //console.log(price);
      //console.log(isactive);

      var data=Number(price);

      if(isNaN(data))
      {
        data = 5;
      }

      const p = new Product(id,name,data,isactive); // id => this.productService.getProducts().length+1
      // this.productService.saveProduct(p);
      this.productService
      .updateProduct(p)
      .subscribe(result => { // geriye sonuç döndürmeyecek yani result'ın içi boş..
        this.products.splice(this.products.findIndex(x=>x.productId==p.productId),1,p)
        // listede değişitirilecek olan eleman hangi index numarasında bulunuyor.. => findIndex
        // 1 tane kaydı günceller ve yerine p elemanı konur..
      });

      this.product = null; // güncelleme sonrası seçili olan elemanı sıfırlama ve <div *ngIf="product"> çalışacak..

  }

}
