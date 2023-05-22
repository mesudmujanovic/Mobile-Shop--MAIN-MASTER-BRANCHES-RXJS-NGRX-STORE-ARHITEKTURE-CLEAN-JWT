package mobileshop.Infrastucture.Mapper.City;

import mobileshop.Entity.City;
import mobileshop.Infrastucture.DTO.CityDto;
import mobileshop.Infrastucture.Mapper.Street.StreetMapper;
import mobileshop.Intergration.DtoMapper;

import java.util.stream.Collectors;

public enum CityMapper implements DtoMapper<City, CityDto> {
    INSTANCE;

    @Override
    public City apply(CityDto cityDto) {
        City city = new City();
        city.setId(cityDto.getId());
        city.setName(cityDto.getName());
        city.setStreets(cityDto.getStreets().stream().map(street -> StreetMapper.INSTANCE.apply(street)).collect(Collectors.toList()));
        return city;
    }
}
