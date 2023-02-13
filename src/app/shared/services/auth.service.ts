import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.default.User = null;

  constructor(private angularFireAuth: AngularFireAuth) {
    angularFireAuth.currentUser.then(user => this.user = user);
    
  }


  login(email: string, password: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.user = res.user;
      })
      .then(() => !!this.user)
      
  }
}
