import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  // Using localstorage to save images as per user ID
  constructor() { }
  user: SocialUser;

  setUser(user) {
    this.user = user;
    this.initializeUserDataModel();
  }

  initializeUserDataModel(){
    if (!localStorage.getItem(this.user.id)) {
      let data = {
        tops: [],
        bottoms: [],
        favorites: [],
      }
      localStorage.setItem(this.user.id, JSON.stringify(data));
    }
  }

  setUserData(data){
    localStorage.setItem(this.user.id, JSON.stringify(data));
  }

  getUserData() {
    if(localStorage.getItem(this.user.id)) {
      return JSON.parse(localStorage.getItem(this.user.id));
    } else {
      return null;
    }
  }
}
