import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private signUpService: SignupService)
  {
   this.postForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
   })
  }


  onSubmit(){
    if(this.postForm.valid){
      const username = this.postForm.value.username;
      const password = this.postForm.value.password;
      this.signUpService.signUp(username, password).pipe(
        catchError(error => {
          console.log(error);
          return of([])
        })
      ).subscribe( response =>{
        console.log("uspesno", response);
      },
      error=>{
        console.log(error); 
      })
      
  }
}

}