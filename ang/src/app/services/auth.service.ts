import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
 
  authToken:any
  user: string

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


  loggedInToken(){
    const token = localStorage.getItem(this.user)          
    if(this.authToken){
      return true;
    }           
  }

  storeToken(user, token){
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('jwt', token)
    this.authToken = token
    this.user = user    
  }

  getToken(){
    return this.authToken
  }


}