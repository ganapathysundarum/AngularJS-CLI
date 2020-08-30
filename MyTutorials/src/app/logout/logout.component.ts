import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticateService } from '../service/hardcoded-authenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public hardcodedAuthenticationService: 
    HardcodedAuthenticateService) { }

  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout()
  }

}
