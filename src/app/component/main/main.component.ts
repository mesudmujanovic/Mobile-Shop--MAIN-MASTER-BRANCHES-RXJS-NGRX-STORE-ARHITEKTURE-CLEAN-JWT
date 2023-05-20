import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, of, tap } from 'rxjs';
import { City } from 'src/app/Interface/CityInterface';
import { Street } from 'src/app/Interface/Street.interface';
import { CityService } from 'src/app/service/city.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  cityForm: FormGroup
  allCity$: Observable<City[]>
  selectedCity: City | null;
  selectedStreet: Street | null;
  cityAndStreet: any;

  constructor(private formBudiler: FormBuilder,
    private cityService: CityService) {
  };

  onCityChange() {
    if (this.selectedCity) {
      const filterCity = this.selectedCity.streets;
      this.selectedStreet = filterCity.length > 0 ? filterCity[0] : null;
    } else {
      this.selectedStreet = null;
    }
  }

  saveStreetAndCity(){
    if(this.selectedStreet && this.selectedCity){
      this.cityAndStreet = {
        city: this.selectedCity,
        street: this.selectedStreet
      }
      console.log(this.cityAndStreet);
    }
  }

  getAllCity(): Observable<City[]> {
    return this.allCity$ = this.cityService.getAllCity().pipe(
      catchError(error => {
        console.log(error);
        return of([]);
      })
    )
  }

  ngOnInit() {
    this.cityForm = this.formBudiler.group({
      name: ["", Validators.required]
    });
    this.getAllCity();
  }
}
