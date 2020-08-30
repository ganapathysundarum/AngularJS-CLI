import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IfscCLientService {

  constructor(private httpClient: HttpClient) 
  { }

  getIFSCService(ifscCode){
    let url = 'https://ifsc.razorpay.com/'+ifscCode
    this.httpClient.get(url).subscribe(
      response => this.handleSuccessfullResponse(response)
    );
    console.log(this.httpClient.get(url));
    //console.log("getIFSC method called "+ifscCode)
  }

  handleSuccessfullResponse(response){
    console.log(response);
  }


}
