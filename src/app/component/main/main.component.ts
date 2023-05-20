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
              private cityService: CityService){
            
  };

  onStreetChange() {
    console.log(this.selectedStreet);
    // Dodajte dodatne radnje koje želite izvršiti kad se odabere ulica
  }
  

  onCityChange() {
    if (this.selectedCity) {
      const filteredStreets = this.selectedCity.streets;
      this.selectedStreet = filteredStreets.length > 0 ? filteredStreets[0] : null;
      console.log(this.selectedCity);
    } else {
      this.selectedStreet = null;
    }
  }

  saveSelection(){
    if(this.selectedCity && this.selectedStreet){
      this.cityAndStreet = {
        city: this.selectedCity,
        street: this.selectedStreet
      };
      console.log(this.cityAndStreet);
    }
  }
  
  

  getAllCity(): Observable<City[]>{
   return this.allCity$ = this.cityService.getAllCity().pipe(
    catchError( error =>{
      console.log(error);
      return of([]);
    })
   )
  }


  ngOnInit(){
    this.cityForm = this.formBudiler.group({
      name:[ "", Validators.required ]
    });
    this.getAllCity();
  }
  
}
