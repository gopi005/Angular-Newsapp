import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Signup } from '../modules/signup.module';
import { SignupService } from '../services/signup/signup.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private signupservice: SignupService,private router:Router){}
  ngOnInit(): void {
      
  }
  // public signupform!:FormGroup;
  // ngOnInit(): void {
  //   this.signupform=this.formbuilder.group({
  //     name:[''],
  //     email:[''],
  //     password:[''],
  //     verifypassword:['']
  //   })
      
  // }
  // constructor(private formbuilder:FormBuilder, private signupservice:SignupService,private router:Router,private httpclient:HttpClient){}
  // signup(){
  //   this.httpclient.post<any>("http://localhost:3000/signupform",this.signupform.value)
  //   .subscribe(res=>{
  //     alert("Registered successfully")
  //     this.signupform.reset();
  //     this.router.navigate(['login'])

  //   },err=>{alert("Failed")})

  // }
  public signup(name: { value: any; },email: { value: any; },password: { value: any; },verifypassword: { value: any; }){
    let signup=new Signup(name.value)
    this.signupservice.signup(signup).subscribe(res=>{
      alert("signup sucessfull")
      console.log(res)
      this.router.navigateByUrl
    },err=>{
      alert("signup failed")
      console.log(err)
    })

  }
}
