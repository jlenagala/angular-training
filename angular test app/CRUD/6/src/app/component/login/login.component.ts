import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationSampleService } from 'src/app/service/authentication/authentication-sample.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username='jan'
password=''
errorMessage='Invlid Credentials'
invalidLogin=false

//DependencyInjection
  constructor(private router:Router,
    private authenticationSampleService:AuthenticationSampleService) { }

  ngOnInit(): void {
  }
  handleLogin(){
    //console.log(this.username);
  //if(this.username==="jan" && this.password==='jan123'){
    if(this.authenticationSampleService.authenticate(this.username,this.password)){
      //ridirect to welcome page
    this.router.navigate(['welcome',this.username])
    this.invalidLogin=false
  }
  else{
    this.invalidLogin=true;
  }
  }
}
