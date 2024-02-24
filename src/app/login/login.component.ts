import { Component, OnInit } from '@angular/core';
import { Login } from '../modules/login.module';
import { LoginService } from '../services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
ngOnInit(){}
constructor(private loginservice:LoginService){}
  login(username: { value: any; },password: { value: any; }){
  	console.log(username.value);
  	console.log(password.value);
    let login=new Login(username.value,password.value)
    console.log(Login)
    this.loginservice.login({Login}).subscribe(
      res=> {console.log(res)
        alert("login successful")
      
      },
      err=> {console.log(err)
      alert("login failed")}
      )

  }
}
