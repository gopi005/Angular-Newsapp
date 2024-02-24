import { Component, OnInit } from '@angular/core';
import { NewsapiService } from './newsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tamilnews';
  news:any[]=[]
  constructor(private api:NewsapiService){}
  ngOnInit(): void {
      this.api.getnews().subscribe((data:any)=>{
        console.log(data)
        this.news=data.articles;
      
      })
  }
  
}
