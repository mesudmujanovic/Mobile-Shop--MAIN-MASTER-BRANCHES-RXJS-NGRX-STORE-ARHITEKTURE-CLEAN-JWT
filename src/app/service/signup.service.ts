import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../const/url';
import { User } from '../Interface/User.interface';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signUp(username: string, password: string): Observable<any> {
    const body = { username, password }
    return this.http.post<User>(`${BASE_URL}/api/auth/signup`, body)
  }
}
