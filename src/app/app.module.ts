import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './component/main/main.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { TariffComponent } from './component/tariff/tariff.component';
import { PriceComponent } from './component/price/price.component';
import { LikeCommComponent } from './component/like-comm/like-comm.component';
import { Wks1Component } from './page/wks1/wks1.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    TariffComponent,
    PriceComponent,
    LikeCommComponent,
    Wks1Component,
    NavbarComponent,
    FooterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({maxAge:25}),
    FormsModule 
   ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
