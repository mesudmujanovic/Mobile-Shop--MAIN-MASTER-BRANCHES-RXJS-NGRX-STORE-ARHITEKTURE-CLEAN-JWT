import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interface/User.interface';
import { BASE_URL } from '../const/url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User>{
    const body = {username, password}
    return this.http.post<User>(`${BASE_URL}/api/auth/login`,body);
  }
}
