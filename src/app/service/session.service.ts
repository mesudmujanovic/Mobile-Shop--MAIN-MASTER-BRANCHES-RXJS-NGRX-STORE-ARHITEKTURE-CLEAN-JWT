import { Injectable } from '@angular/core';
import { User } from '../Interface/User.interface';
import { City } from '../Interface/CityInterface';
import { LikeComService } from './like-com.service';
import { LikeComm } from '../Interface/LikeComm.interface';
import { Tariff } from '../Interface/Tariff.interface';
import { SalesUserState } from '../store/state/user.state';
import { SalesOrder } from '../Interface/salesOrder';


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

setSessionStorageSalesOrder(salesOrder: SalesOrder | undefined){
  sessionStorage.setItem("sessionStorageOrder",JSON.stringify(salesOrder));
}

  getSalesOrderSession(): SalesOrder {
    const salesOrderString: string | null = sessionStorage.getItem("sessionStorageOrder");
    if(!salesOrderString){
      return{
        tariff:{},
        user:{},
        city:{} 
      }
    }
    return JSON.parse(salesOrderString);
  }

  getInitalState():SalesUserState {
    const salesOrder: SalesOrder = this.getSalesOrderSession();
    return salesOrder as SalesUserState;
  }

}
