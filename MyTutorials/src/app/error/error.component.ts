import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Ooops ..!  Unknow error occurred. Please contact your administrator for the support !'

  constructor() { }

  ngOnInit(): void {
  }

}
