import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IfscCLientService, IfscBean } from '../service/data/ifsc/ifsc-client.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  name = ''
  ifscCode = ''
  responseBody: IfscBean = null  

  constructor(private route: ActivatedRoute,
    private ifscDataService: IfscCLientService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getIFSC(){
    // this.ifscDataService.getIFSCService(this.ifscCode).subscribe(
    //   response => this.handleSuccessfullResponse(response),
    //   error => this.handleErrorResponse(error)
    // );    
    //CAll via path variable
    this.ifscDataService.getIFSCServicePathVariable(this.ifscCode).subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    ); 
  }

  handleSuccessfullResponse(response){
    this.responseBody = response
  }

  handleErrorResponse(error){
    this.responseBody = error
  }

}
