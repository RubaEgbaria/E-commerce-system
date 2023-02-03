import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private PHOTOS_SERVICE_URL:string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private httpClient: HttpClient) { }

  private photos = [
    new Products("This is a very buetifull picutre","/assets/pic1.jpg","/assets/pic1.jpg"),
    new Products("My pic 2","/assets/pic2.jpg","This is a very buetifull picutre"),
    new Products("My pic 3","/assets/pic3.jfif","This is a very buetifull picutre"),
    new Products("My pic 4","/assets/pic3.jpg","This is a very buetifull picutre"),
    new Products("My pic 5","https://images.unsplash.com/photo-1612301658238-8ca9921b91ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmljZXxlbnwwfHwwfHw%3D&w=1000&q=80","This is a very buetifull picutre from the internet")
  ]

  getPhotosAsync():Observable<Products[]>
  {
    return this.httpClient.get<Products[]>(this.PHOTOS_SERVICE_URL);
  }
  getPhotos() : Products[]
  {
    return this.photos;
  }

  getPhoto(idx:number):Products
  {
    return this.photos[idx];
  }
}
