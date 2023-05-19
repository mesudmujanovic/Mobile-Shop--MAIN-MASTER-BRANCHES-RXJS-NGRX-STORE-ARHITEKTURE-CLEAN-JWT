package mobileshop.Infrastucture.Mapper.City;

import mobileshop.Entity.City;
import mobileshop.Infrastucture.DTO.City.CityDto;
import mobileshop.Intergration.DtoMapper;

public enum CityDtoMapper implements DtoMapper<CityDto, City> {
    INSTANCE;
    @Override
    public CityDto apply(City city) {
        CityDto cityDto = new CityDto();
        cityDto.setId(city.getId());
        cityDto.setName(city.getName());
        return cityDto;
    }
}
