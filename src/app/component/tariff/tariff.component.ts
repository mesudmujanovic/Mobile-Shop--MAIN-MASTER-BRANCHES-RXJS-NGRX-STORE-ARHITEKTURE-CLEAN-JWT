import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError, of} from 'rxjs';
import { Tariff } from 'src/app/Interface/Tariff.interface';
import { TariffService } from 'src/app/service/tariff.service';
import { getTariff } from 'src/app/store/selectors/selector';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent {

  allTariff$: Observable<Tariff[]>;
  selectedTariff: any = this.tariffService.selectTarf;
  isTariffSelected: boolean = false;

  constructor(private tariffService: TariffService) {
    console.log(this.selectedTariff);
    
   }

  selectTariff(tariff: any) {
    this.selectedTariff = tariff;
    this.tariffService.seleTariff(tariff);
    this.isTariffSelected = true;
  }

  getAllTariffs(): Observable<Tariff[]> {
    return this.allTariff$ = this.tariffService.getAllTariff().pipe(
      catchError((error => {
        console.log("error", error);
        return of();
      }))
    )
  };

  ngOnInit() {
    this.getAllTariffs().subscribe(tariff => {
      console.log("tariff", tariff);
    });    
  };
}
