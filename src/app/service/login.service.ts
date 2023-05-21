import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interface/User.interface';
import { BASE_URL } from '../const/url';
import { AppState } from '../store/state/app.state';
import { Store } from '@ngrx/store';
import { getUser } from '../store/selectors/selector';
import { AddUser } from '../store/action/action';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private store: Store<AppState>,
    private sessionService: SessionService) { }

  login(username: string, password: string): Observable<any> {
    const body = { username, password }
    return this.http.post<User>(`${BASE_URL}/api/auth/login`, body);
  }

  get user() {
    return this.store.select(getUser)
  };

  saveUser(user: User) {
    this.sessionService.saveUserToSessionStorage(user);
    this.store.dispatch(new AddUser(user));
  }
}
