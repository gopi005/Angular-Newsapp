import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }
  // apikey = '54108918c981eaf00e90be50888611c2';
// category = 'general';
// url = 'https://gnews.io/api/v4/top-headlines?category=' + this.category + '&lang=en&country=us&max=10&apikey=' + this.apikey;

apikey = '94f3398049804b87dfecccc54082f9ac';
category = 'general';
url = 'https://gnews.io/api/v4/top-headlines?category=' + this.category + '&lang=en&country=us&max=10&apikey=' + this.apikey;
getnews(){
  return this.http.get(this.url)
}

}
