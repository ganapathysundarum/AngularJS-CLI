import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticateService {

  constructor() { }


  authenticate(username, password){
    console.log('before --> '+this.isUserAuthticated())
    if(username==='admin' && password==='admin'){
      sessionStorage.setItem('authenticatedUser',username);
      console.log('after --> '+this.isUserAuthticated())
      return true;
    }    
    return false;
  }

  isUserAuthticated(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

}
