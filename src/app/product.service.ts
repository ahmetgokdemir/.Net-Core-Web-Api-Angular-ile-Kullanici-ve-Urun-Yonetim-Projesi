import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model, Product } from './Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:5000/";

  model = new Model(); // Model'in constructor çalışır

  p: any; // Product yerine any; seçilen eleman buna set edilecektir..
  //p: Product[]  = [];

  constructor(private http: HttpClient) { } // *** inject işlemi

  // Http Get List Request
  getProducts(): Observable<Product[]>{

    // return this.model.products;
    return this.http.get<Product[]>(this.baseUrl + 'api/products');

  }

  // Http Post Request
  addProduct(product: Product): Observable<Product>
  {
    return this.http.post<Product>(this.baseUrl + 'api/products', product);

  }

  // Http Put Request
  // return NoContent(); olduğu için geri dönüş değeri olmayacak (: Observable<Product>).. => Products.cs içerisinde
  updateProduct(product: Product)
  {
    return this.http.put<Product>(this.baseUrl + 'api/products/'+product.productId, product);
  }

    // Http Delete Request
  // return NoContent(); =>
  eraseProduct(product: Product)
  {
    return this.http.delete<Product>(this.baseUrl + 'api/products/'+product.productId);
  }

  getProductById(id: number){
    return this.model.products.find(i => i.productId == id); // güncellenecek product
  }


  // tek bir metot üzerinden hem ekleme hem de güncelleme işlemi yapılacak
  saveProduct(product: Product)
  {
    if(product.productId == 0)
    {
      // product.id = this.getProducts().length+1;
      this.model.products.push(product);
    }
    else{

      // const p = this.getProductById(product.id);
      this.p = this.getProductById(product.productId);
      this.p.name= product.name;
      this.p.isActive= product.isActive;
      this.p.price= product.price;

    }

  }

  deleteProduct(product: Product)
  {
    this.model.products = this.model.products.filter(p=>p!==product); // seçili olan eleman (p) dışındaki tüm ürünler listeden filtrelenir ve tekrar listeye atılır..
  }


}
