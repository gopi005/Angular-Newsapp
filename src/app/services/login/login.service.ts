import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Login } from 'src/app/modules/login.module';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  public login (data:any ){
  	return this.httpClient.post("http://localhost:3000/user", data)
  }
}

