package mobileshop.Infrastucture.Mapper.City;

import mobileshop.Entity.City;
import mobileshop.Infrastucture.DTO.City.CityDto;
import mobileshop.Intergration.DtoMapper;

public enum CityMapper implements DtoMapper<City, CityDto> {
    INSTANCE;

    @Override
    public City apply(CityDto cityDto) {
        City city = new City();
        city.setId(cityDto.getId());
        city.setName(cityDto.getName());
        return city;
    }
}
