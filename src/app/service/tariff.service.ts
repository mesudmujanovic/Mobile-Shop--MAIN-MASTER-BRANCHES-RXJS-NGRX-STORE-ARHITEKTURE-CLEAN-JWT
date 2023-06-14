import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Tariff } from '../Interface/Tariff.interface';
import { BASE_URL } from '../const/url';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { getSelectTariff, getTariff } from '../store/selectors/selector';
import { AddTariff, SelectedTariff } from '../store/action/action';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor(private htpp: HttpClient,
    private store: Store<AppState>,
    private sessionStorage: SessionService) { }

  getAllTariff(): Observable<Tariff[]> {
    return this.htpp.get<Tariff[]>(`${BASE_URL}/api/allTariffs`)
  }

  saveTariff(tariff: Tariff): Observable<Tariff> {
    return this.htpp.post<Tariff>(`${BASE_URL}/api/tariff`, tariff);
  }

  get tariff() {
    return this.store.select(getTariff);
  }

  addTariff(tariff: Tariff) {
    this.store.dispatch(new AddTariff(tariff));
  }

  get selectTarf() {
    return this.store.select(getSelectTariff);
  }

  seleTariff(tariff: Tariff) {
    this.store.dispatch(new SelectedTariff(tariff));
    this.sessionStorage.saveTariffToSessionStorage(tariff);
  }

}
