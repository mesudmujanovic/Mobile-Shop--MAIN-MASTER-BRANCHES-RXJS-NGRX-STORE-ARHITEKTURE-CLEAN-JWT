package mobileshop.Service;

import mobileshop.Infrastucture.DTO.City.CityDto;

public interface CityService {

    public CityDto saveCity(CityDto cityDto);

    public CityDto deleteCity (Long id);
}
