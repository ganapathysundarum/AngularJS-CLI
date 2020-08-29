import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username);
    if(this.username==="admin" && this.password==="admin"){
      this.isValidLogin=false
      this.router.navigate(['hello',this.username])
    }else{
      this.isValidLogin=true
    }
  }

}
