import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/Interface/User.interface';
import { LoginService } from 'src/app/service/login.service';
import { AddUser } from 'src/app/store/action/action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  loginUser$: Observable<User[]> = this.loginService.user;

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    ) {}

    addUser(){
      const user: User = {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value
      };
      this.loginService.saveUser(user);
    }
    //oba nacina prihvatljiva i dobra...izabrao sam ovaj nacin jer mi je kod citljiviji i ako budem dodavao jos inputa u formu lakse mi je da im kontrolisem odavde
    // addUser(username: {username:string, password:string}){
    //  this.loginService.saveUser(username)
    // }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  };

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      console.log("token postoji", token);
    } else {
      console.log("token nije sacuvan");
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.loginService.login(username, password).pipe(
        tap(response => {
          console.log("login", response);
          const token = response.token;
          localStorage.setItem('token', token);
          console.log('token', token);
          this.router.navigate(['/main']);
        })
      ).subscribe(() => {
        console.log("error");
      })
    } else {
      console.log("error");
    }
  }

}
