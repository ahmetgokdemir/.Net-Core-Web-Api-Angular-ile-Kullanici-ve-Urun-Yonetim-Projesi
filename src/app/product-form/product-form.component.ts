import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Model';
import { ProductService } from '../product.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() products: Product[] = []; //*** products.component.html'den gelecek => <product-form [products]="products"></product-form>
  model: any = {}; //  ngModel kullanabilmek için FormModule'ü app.module.ts'e eklenmeli. ***

  constructor(private productService: ProductService,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  addProduct()
  {
      //console.log(name);
      //console.log(price);
      //console.log(isactive);

      /*var data=Number(price);

      if(isNaN(data))
      {
        data = 5;
      }*/

      /*if(this.model.name === "abc") { // movie-create.component.html'de güncelleme -1, Oluşturulan kayıtlar db.json'dan silinebilir..
        this.alertify.error("tüm alanları doldurmalısınız");
        return;
      }*/

      const p = new Product(0,this.model.name,this.model.price,this.model.isActive); // id => this.productService.getProducts().length+1
      // this.productService.saveProduct(p);

      // bu method (addProduct) Observable geriye döndürdüğünden dolayı sürecin sonunda subscribe edilecek ve eklenen bilgiyi geriye alabiliriz..
      this.productService.addProduct(p).subscribe(product => {   //
        this.products.push(product);
      });


  }

}
