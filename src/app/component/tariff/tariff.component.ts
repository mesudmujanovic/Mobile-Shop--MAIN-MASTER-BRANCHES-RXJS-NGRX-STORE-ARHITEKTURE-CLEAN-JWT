import { Component } from '@angular/core';
import { Observable, Subscription, catchError, of, tap, throwError } from 'rxjs';
import { Tariff } from 'src/app/Interface/Tariff.interface';
import { TariffService } from 'src/app/service/tariff.service';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent {

  allTariff$: Observable<Tariff[]>;
  private subscription: Subscription;

  constructor(private tariffService: TariffService){}

  getAllTariffs(): Observable<Tariff[]>{
    return this.allTariff$ = this.tariffService.getAllTariff().pipe(
   catchError((error =>{
    console.log("error",error);
    return of();
   }))
    )
  };

  ngOnInit(){
     this.getAllTariffs().subscribe( tariff=> {
       console.log("tariff",tariff);
     })
  };

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
