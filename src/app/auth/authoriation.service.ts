/*
 * Created on Sat Oct 19 2019
 *
 * Copyright (c) 2019 Dominik Sammer
 */

import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { FirebaseAuth } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class AuthoriationService {
  private user: User;

  constructor(public  afAuth: FirebaseAuth, public  router: Router) {
    this.afAuth.authState.subscribe( (user: User) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
   }

   async login(email: string, password: string) {
      try {
          await this.afAuth.auth.signInWithEmailAndPassword(email, password);
          this.router.navigate(['home']);
      } catch (e) {
          alert('Error!'  +  e.message);
      }
    }

    get isLoggedIn(): boolean {
        const  user  =  JSON.parse(localStorage.getItem('user'));
        return  user  !==  null;
    }
}
