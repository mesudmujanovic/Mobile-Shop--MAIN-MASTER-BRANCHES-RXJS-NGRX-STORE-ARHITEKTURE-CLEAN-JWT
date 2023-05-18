import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private signUpService: SignupService,
    private router: Router) {
    this.postForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.postForm.valid) {
      const username = this.postForm.get('username')?.value;
      const password = this.postForm.get('password')?.value;
      this.signUpService.signUp(username, password).pipe(
        tap(response => {
          console.log("added", response);
          this.router.navigate(['/login']);
        })
      ).subscribe(() => { },
        error => {
          console.log(error);
        })
    }
  }

}

