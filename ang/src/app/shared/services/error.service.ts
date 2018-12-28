import { Observable } from 'rxjs';

export class ErrorService {

  constructor() { }

  displayMessage(){
    return Observable.create( message => {
      setTimeout(() => {  
      message.next({message: false, color: false}) 
    }, 3000);
    })
  }

}
