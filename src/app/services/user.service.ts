import { Injectable } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/user';
import { firstValueFrom, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly authService: AuthService,
    private readonly afs: AngularFirestore) { }

  getFavorites(): Promise<Number[]> {
    if(!!this.authService.user) {
      const userDocRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`user/${this.authService.user.uid}`);
      return firstValueFrom(userDocRef.get()).then(user => user.data().favorites);
    } else {
      return Promise.resolve([]);
    }
  }
}
