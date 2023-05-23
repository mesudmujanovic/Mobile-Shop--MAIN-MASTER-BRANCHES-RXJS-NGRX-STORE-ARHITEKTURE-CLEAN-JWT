import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tariff } from '../Interface/Tariff.interface';
import { BASE_URL } from '../const/url';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { getTariff } from '../store/selectors/selector';
import { AddTariff } from '../store/action/action';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor(private htpp: HttpClient,
             private store: Store<AppState>) { }

  getAllTariff(): Observable<Tariff[]>{
  return this.htpp.get<Tariff[]>(`${BASE_URL}/api/allTariffs`)
  }

  saveTariff(tariff: Tariff):Observable<Tariff>{
  return this.htpp.post<Tariff>(`${BASE_URL}/api/tariff`,tariff);
  }

  get tariff(){
    return this.store.select(getTariff);
  }
 
  saveStoreTariff(tariff: Tariff){
    this.store.dispatch(new AddTariff(tariff));
  }

}
