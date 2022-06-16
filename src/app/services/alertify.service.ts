import { Injectable } from "@angular/core";

declare let alertify: any;

// Alertify service'i bütün componentlerde kullanılacak dolayısıyla global bir service yani uygulama çalıştığında alertify service'in bir kopyası oluşturulacak ve hangi componentden alertify service ulaşılmak istenirse o component içerisinde oluşturulmuş olan global olan aynı nesneyi kullanılacakler ve alertify service'e component içerisinden erişmek içinde bu alertify service'i componentte inject edilmeli yani tanımlanmalı .. @Injectable demek componentte içerisinde kullanılıcaktır..

@Injectable()
export class AlertifyService {
  constructor() {}

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  // alertify service app.module içerisinde, global olarak işaretlendiği için bunun bir nesnesi oluşturulacak ve artık nesneye ulaşılabilir bunun için component oluşturulduğu anda constructor içerisinde (movies.component.ts)...
}
