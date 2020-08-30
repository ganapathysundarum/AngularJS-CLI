import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticateService } from '../service/hardcoded-authenticate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserAuhtheticated : boolean = false
  constructor(public hardcodedAuthenticationService: 
    HardcodedAuthenticateService) 
  { }

  ngOnInit(){

  //   if(this.hardcodedAuthenticationService.isUserAuthticated()){
  //     this.isUserAuhtheticated = true;
  //   }
  }

}
