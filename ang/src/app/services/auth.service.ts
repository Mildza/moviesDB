import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  client: any
  googleId: any
  email: any
  
  constructor() {     
  }

  storeUserData(fb){
    localStorage.setItem('fb', fb)
  }

  getFb(){
    const fb = localStorage.getItem('fb')
    if(fb) return fb 
  }
  
  loggedIn(){
    const token = localStorage.getItem('fb')          
    if(token){
      return true;
    }           
  }

}