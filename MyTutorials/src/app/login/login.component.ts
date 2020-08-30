import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticateService } from '../service/hardcoded-authenticate.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials...!'
  isValidLogin = false;

  constructor(private router: Router, 
    public hardcodedAuthenticationService: HardcodedAuthenticateService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username);
    //if(this.username==="admin" && this.password==="admin"){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.isValidLogin=false
      this.router.navigate(['hello',this.username])
    }else{
      this.isValidLogin=true
    }
  }

}
