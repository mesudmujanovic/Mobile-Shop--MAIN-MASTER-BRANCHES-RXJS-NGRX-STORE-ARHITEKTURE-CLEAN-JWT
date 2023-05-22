package mobileshop.Service;

import mobileshop.Infrastucture.DTO.CityDto;

import java.util.List;

public interface CityService {

    public CityDto saveCity(CityDto cityDto);

    public CityDto deleteCity (Long id);

    public CityDto cityId (Long id);

    public List<CityDto> getAllCity ();
}
