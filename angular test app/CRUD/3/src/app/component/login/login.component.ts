import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  handleLogin(){
    //console.log(this.username);
  if(this.username==="jan" && this.password==='jan123'){
    //ridirect to welcome page
    this.router.navigate(['welcome',this.username])
    this.invalidLogin=false
  }
  else{
    this.invalidLogin=true;
  }
  }
}
