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
    return this.httpClient.get<IfscBean>(url);   
  } 

  getIFSCServicePathVariable(ifscCode){
    let url = `https://ifsc.razorpay.com/${ifscCode}`
    return this.httpClient.get<IfscBean>(url);   
  } 

}

export class IfscBean{
  constructor(public BANK : string,
    public BANKCODE : string,
    public BRANCH : string,        
    public STATE : string,
    public ADDRESS : string,
    public CENTRE : string,
    public CITY : string,
    public CONTACT : string,
    public DISTRICT : string,
    public IFSC : string,
    public IMPS : string,
    public MICR : string,
    public MICRCODE : string,
    public NEFT : string,
    public RTGS : string,    
    public STDCODE : string,
    public UPI : string){
  }
}

