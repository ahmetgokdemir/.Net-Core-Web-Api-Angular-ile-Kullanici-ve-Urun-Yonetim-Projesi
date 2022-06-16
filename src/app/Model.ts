export class Model {
  //categoryName : string;
  products : Array<Product> = [];

  constructor(){

    //this.categoryName="Telefon";
    // this.products = [
    //   new Product(1,"samsung s5",2000,false), // Product'ın constructor çalışır
    //   new Product(2,"samsung s6",3000,false),
    //   new Product(3,"samsung s7",4000,true),
    //   new Product(4,"samsung s8",5000,true),
    //   new Product(5,"samsung s9",6000,true),
    //   new Product(6,"samsung s10",7000,true),
    //   new Product(7,"samsung s11",8000,true),
    //   new Product(8,"samsung s12",9000,false)



    //   /*
    //   {id:1,name:"samsung s5",price:2000,isActive:true},
    //   {id:2,name:"samsung s6",price:3000,isActive:false},
    //   {id:3,name:"samsung s7",price:4000,isActive:true},
    //   {id:4,name:"samsung s8",price:5000,isActive:false},
    //   {id:5,name:"samsung s9",price:6000,isActive:true}
    //   */
    // ];
  }
}

export class Product {
  productId: number;
  name: string;
  price: number;
  isActive: boolean;

  constructor(_id: number,_name: string,_price: number,_isActive: boolean){
    this.productId=_id;
    this.name=_name;
    this.price=_price;
    this.isActive=_isActive;
  }
}
