import { Component, OnInit } from '@angular/core';
import { Model, Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

// products: Product[]  = []; //     ***
products: Product[]  = [];

selectedProduct: any; // Product yerine any; seçilen eleman buna set edilecektir..

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts()
    this.getProducts();
  }

  getProducts(){

    //return this.productService.getProducts();

     this.productService.getProducts().subscribe(products =>
      {
        this.products = products
      });

  }

  onSelectProduct(product: Product){ // product: Product; html üzerindeki objedir..
    this.selectedProduct = product;

    //console.log(this.selectedProduct);

    //  seçilen product bilgisini detaylarını göstermek için detail-component'e ihtiyaç var ve bu obje bu componentte gönderilir.. (input olarak)
  }

  deleteProduct(product: Product)
  {
    // this.productService.deleteProduct(product);
    this.productService.eraseProduct(product).subscribe(result => {
      this.products.splice(this.products.findIndex(x=>x.productId==product.productId),1)
    });

    // this.ngOnInit();
  }

    //categoryName = "Telefon";

  /*
  products = [
    {id:1,name:"samsung s5",price:"2000",isActive:true},
    {id:2,name:"samsung s6",price:"3000",isActive:false},
    {id:3,name:"samsung s7",price:"4000",isActive:true},
    {id:4,name:"samsung s8",price:"5000",isActive:false},
    {id:5,name:"samsung s9",price:"6000",isActive:true}
  ];
  */

  //model = new Model(); // Model'in constructor çalışır

  /*
  getName(){
    return this.model.categoryName;
  }
  */

  /*
  getProducts(){
    return this.model.products;
  }
  */

}
