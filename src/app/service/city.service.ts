import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../Interface/CityInterface';
import { BASE_URL } from '../const/url';
import { getCity } from '../store/selectors/selector';
import { AppState } from '../store/state/app.state';
import { Store } from '@ngrx/store';
import { AddCity } from '../store/action/action';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient,
             private store: Store<AppState>) { }

  public addCity(city: City): Observable<City>{
    return this.http.post<City>(`${BASE_URL}/api/saveCity`,city)
  }

  public getAllCity(): Observable<City[]>{
    return this.http.get<City[]>(`${BASE_URL}/api/getAllCity`)
  }

  get city(){
    return this.store.select(getCity)
  }

  saveCity(city: City){
    this.store.dispatch(new AddCity(city));
  }
}
