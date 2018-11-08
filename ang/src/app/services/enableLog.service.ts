import { Subject, Observable } from 'rxjs';

export class EnableLog {

  constructor() { }

  private subject = new Subject<boolean>();

  clicked(clicked: boolean) {
    this.subject.next( clicked );
  }

  showLogin(): Observable<boolean> {
    return this.subject.asObservable();
  }

}