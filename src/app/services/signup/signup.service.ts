import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient) { }
  public signup(data:any ){
  	return this.httpClient.post<any>("http://localhost:3000/signupform",data)
  }
}
