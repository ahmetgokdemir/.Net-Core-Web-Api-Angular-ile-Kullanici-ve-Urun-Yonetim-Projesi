import { image } from "./image";

export interface User {
    id: number;
    username: string;
    name: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    city: string;
    country: string;
    introduction: string;
    hobbies: string;
    imageUrl: string;
    profileImageUrl: string; // isProfile true olan kısım UserForDetailsDTO'da
    image: image; // array kaldırıldı.. UserForListDTO daki image ismi ile aynı olmalı.. public ImagesForDetails Image { get; set; }
    images : image[]; //  UserForDetailsDTO daki images ismi ile aynı olmalı.. public List<ImagesForDetails> Images { get; set; }.. ayrıca List olduğu için image[] tanımlandı..
    /*constructor(_id: number,
                _username:string,
                _name: string,
                _age: number,
                _gender: string,
                _isActive: boolean
                ){
      this.id=_id;
      this.username= _username;
      this.name=_name;
      this.age=_age;
      this.gender=_gender;
      this.created = Date.;
    }*/

}
