import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../Interface/CityInterface';
import { BASE_URL } from '../const/url';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  public addCity(city: City): Observable<City>{
    return this.http.post<City>(`${BASE_URL}/api/saveCity`,city)
  }

  public getAllCity(): Observable<City[]>{
    return this.http.get<City[]>(`${BASE_URL}/api/getAllCity`)
  }
}
