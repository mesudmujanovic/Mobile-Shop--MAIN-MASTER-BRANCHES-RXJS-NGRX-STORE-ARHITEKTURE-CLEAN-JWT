import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tariff } from '../Interface/Tariff.interface';
import { BASE_URL } from '../const/url';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor(private htpp: HttpClient) { }

  getAllTariff(): Observable<Tariff[]>{
  return this.htpp.get<Tariff[]>(`${BASE_URL}/api/allTariffs`)
  }

  saveTariff(tariff: Tariff):Observable<Tariff>{
  return this.htpp.post<Tariff>(`${BASE_URL}/api/tariff`,tariff);
  }
}
