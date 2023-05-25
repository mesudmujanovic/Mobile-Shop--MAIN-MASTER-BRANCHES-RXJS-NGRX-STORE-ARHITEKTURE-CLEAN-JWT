import { Component } from '@angular/core';
import { Observable, Subscription, catchError, of, tap, throwError } from 'rxjs';
import { Tariff } from 'src/app/Interface/Tariff.interface';
import { TariffService } from 'src/app/service/tariff.service';
import { SessionService } from 'src/app/service/session.service';
import { AppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { SelectedTariff } from 'src/app/store/action/action';
import { getSelectTariff } from 'src/app/store/selectors/selector';
import { getTariff } from '../../store/selectors/selector';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent {

  allTariff$: Observable<Tariff[]>;
  selectedTariff: any = this.tariffService.tariff;
  isTariffSelected: boolean = false;

  constructor(private tariffService: TariffService,
    private sessionService: SessionService,
    private store: Store<AppState>) { }

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
    })
  };
}
