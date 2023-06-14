import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { TariffComponent } from './tariff.component';
import { TariffService } from 'src/app/service/tariff.service';
import { Observable, of } from 'rxjs';
import { Tariff } from 'src/app/Interface/Tariff.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/app/store/reducers/app.reducers';


describe('TariffComponent', () => {
  let component: TariffComponent;
  let fixture: ComponentFixture<TariffComponent>;
  let tariffService: TariffService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TariffComponent],
      providers: [TariffService],
      imports: [HttpClientTestingModule,
         StoreModule.forRoot(appReducers)] 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffComponent);
    component = fixture.componentInstance;
    tariffService = TestBed.inject(TariffService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get all tariffs on component initialization', fakeAsync(() => {
    const mockTariffs: Tariff[] = [
      { id: 1, sku: 'Tariff1', speed: 100, priceList: [{ id: 1, price: 50, contactDuration: 12, oneTime: false }] },
      { id: 2, sku: 'Tariff2', speed: 200, priceList: [{ id: 2, price: 75, contactDuration: 24, oneTime: true }] }
    ];
    spyOn(tariffService, 'getAllTariff').and.returnValue(of(mockTariffs));

    component.ngOnInit();
    tick();

    expect(component.allTariff$).toBeDefined();
    component.allTariff$.subscribe(tariffs => {
      expect(tariffs).toEqual(mockTariffs);
    });
  }));

  it('should select a tariff', () => {
    const mockTariff = {  id: 1, sku: 'Tariff1', speed: 100, priceList: [{  id: 1, price: 50, contactDuration: 12, oneTime: false }] };

    component.selectTariff(mockTariff);

    expect(component.selectedTariff).toEqual(mockTariff);
    expect(component.isTariffSelected).toBeTrue();
    expect(tariffService.seleTariff).toHaveBeenCalledWith(mockTariff);
  });


});
