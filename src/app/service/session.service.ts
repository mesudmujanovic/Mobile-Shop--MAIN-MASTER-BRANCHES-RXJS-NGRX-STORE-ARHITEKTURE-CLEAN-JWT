import { Injectable } from '@angular/core';
import { User } from '../Interface/User.interface';
import { City } from '../Interface/CityInterface';
import { Tariff } from '../Interface/Tariff.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  saveUserToSessionStorage(user: User) {
    const userJSON = JSON.stringify(user);
    sessionStorage.setItem('user', userJSON);
  }

  getUserFromSessionStorage(): User | null {
    const userJSON = sessionStorage.getItem('user');
    if (userJSON) {
      return JSON.parse(userJSON);
    }
    return null;
  }

  saveCityToSessionStorage(city: City) {
    const cityJson = JSON.stringify(city);
    sessionStorage.setItem('city', cityJson)
  }

  getCityFromSessionStorage(): City | null {
    const cityJson = sessionStorage.getItem('city');
    if (cityJson) {
      return JSON.parse(cityJson);
    }
    return null;
  }

  saveCommentToSessionStorage(comment: any) {
    const commentJson = JSON.stringify(comment);
    sessionStorage.setItem('comment', commentJson);
  }

  getCommentFromSessionStorage(): any | null {
    const commentJson = sessionStorage.getItem('comment');
    if (commentJson) {
      return JSON.parse(commentJson);
    }
    return null;
  }

  saveTariffToSessionStorage(tariff: any) {
    sessionStorage.setItem('selectedTariff', JSON.stringify(tariff));
  }

  getTariffFromSessionStorage(): any {
    const tariff = sessionStorage.getItem('selectedTariff');
    return JSON.parse(tariff);
  }

}
