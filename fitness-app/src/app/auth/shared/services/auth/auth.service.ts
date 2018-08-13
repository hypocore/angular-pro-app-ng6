import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Store } from 'store';
import { map } from 'rxjs/operators';

export interface User {
  email: string,
  uid: string,
  authenticated: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth$ = this.af.authState
  .pipe(
    map(next => {
      if(!next){
        this.store.set('user', null);
        return;
      }
      const user: User = {
        email: next.email,
        uid: next.uid,
        authenticated: true
      }
      this.store.set('user', user);
    })
  );
  
  constructor(
    private store: Store,
    private af: AngularFireAuth
  ) { }

  createUser(email: string, password: string){
    return this.af.auth
      .createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string){
    return this.af.auth
      .signInWithEmailAndPassword(email, password);
  }
}
