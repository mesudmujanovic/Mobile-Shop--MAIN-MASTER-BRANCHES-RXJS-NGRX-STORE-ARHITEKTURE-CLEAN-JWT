import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/Interface/User.interface';
import { LoginService } from 'src/app/service/login.service';
import { SessionService } from '../../service/session.service';
import { Store } from '@ngrx/store';
import { getUser } from 'src/app/store/selectors/selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUser$: Observable<User[]>;
  loginForm: FormGroup
  user$: Observable<User[]>;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private sessionService: SessionService,
    private store:Store) { }

  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.loginService.login(username, password).pipe(
        tap(response => {
          console.log("login", response);
          const token = response.token;
          const username = response.username;
          const userId = response.id
          localStorage.setItem('name', username);
          localStorage.setItem('token', token);          
          this.router.navigate(['/main']);
        })
      ).subscribe(() => {
        console.log();
      })
    } else {
      console.log("error");
    }
  }

  addUser() {
    const user: User = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };
    this.loginService.saveUser(user);
  }
  //funkciju saveUser iz loginS sam mogao da pozovem u onLogin, ali sam vezbao na ovaj nacin
  //oba nacina prihvatljiva i dobra...izabrao sam ovaj nacin jer mi je kod citljiviji i ako budem dodavao jos inputa u formu lakse mi je da im kontrolisem odavde
  // addUser(username: {username:string, password:string}){
  //  this.loginService.saveUser(username)
  // }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.user$ = this.store.select(getUser)
    this.user$.subscribe(
      user => {
        console.log("select",user);
      }
    )
  };

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      console.log("token postoji", token);
    } else {
      console.log("token nije sacuvan");
    }
  }

}
