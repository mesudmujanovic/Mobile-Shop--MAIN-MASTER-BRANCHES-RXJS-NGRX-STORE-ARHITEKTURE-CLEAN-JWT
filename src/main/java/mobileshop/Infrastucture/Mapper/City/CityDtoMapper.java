package mobileshop.Infrastucture.Mapper.City;

import mobileshop.Entity.City;
import mobileshop.Infrastucture.Dto.CityDto;
import mobileshop.Infrastucture.Mapper.Street.StreetDtoMapper;
import mobileshop.Intergration.DtoMapper;

import java.util.stream.Collectors;

public enum CityDtoMapper implements DtoMapper<CityDto, City> {
    INSTANCE;
    @Override
    public CityDto apply(City city) {
        CityDto cityDto = new CityDto();
        cityDto.setId(city.getId());
        cityDto.setName(city.getName());
        cityDto.setStreets(city.getStreets().stream().map(street -> StreetDtoMapper.INSTANCE.apply(street)).collect(Collectors.toList()));
        return cityDto;
    }
}
