package mobileshop.Service.Impl;

import mobileshop.Entity.City;
import mobileshop.Infrastucture.DTO.CityDto;
import mobileshop.Infrastucture.Mapper.City.CityDtoMapper;
import mobileshop.Infrastucture.Mapper.City.CityMapper;
import mobileshop.Repository.CityRepository;
import mobileshop.Service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityImpl implements CityService {

    @Autowired
    CityRepository cityRepository;

    @Override
    public CityDto saveCity(CityDto cityDto) {
        City city = CityMapper.INSTANCE.apply(cityDto);
        City saveCity = cityRepository.save(city);
        return CityDtoMapper.INSTANCE.apply(saveCity);
    }

    @Override
    public CityDto deleteCity(Long id) {
       City city = cityRepository.findById(id).orElseThrow(() -> new RuntimeException("Not find by this id"));
       cityRepository.deleteById(id);
       return CityDtoMapper.INSTANCE.apply(city);
    }

    @Override
    public CityDto cityId(Long id) {
        City city = cityRepository.findById(id).orElseThrow(() -> new RuntimeException("not find this id"));
        return CityDtoMapper.INSTANCE.apply(city);
    }

    @Override
    public List<CityDto> getAllCity() {
        List<City> cityList = cityRepository.findAll();
        return cityList.stream().map(CityDtoMapper.INSTANCE::apply).collect(Collectors.toList());
    }
}
