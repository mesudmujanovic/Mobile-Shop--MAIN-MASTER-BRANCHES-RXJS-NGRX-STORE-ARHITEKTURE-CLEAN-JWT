import { Injectable } from '@angular/core';
import { User } from '../Interface/User.interface';
import { City } from '../Interface/CityInterface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  saveUserToSessionStorage(user: User) {
    const userJSON = JSON.stringify(user);
    sessionStorage.setItem('user', userJSON);
  }

  saveCityToSessionStorage(city: City) {
    const cityJson = JSON.stringify(city);
    sessionStorage.setItem('city', cityJson)
  }
}
