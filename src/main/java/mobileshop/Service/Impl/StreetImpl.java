package mobileshop.Service.Impl;

import mobileshop.Entity.Street;
import mobileshop.Infrastucture.Dto.StreetDto;
import mobileshop.Infrastucture.Mapper.City.CityMapper;
import mobileshop.Infrastucture.Mapper.Street.StreetDtoMapper;
import mobileshop.Infrastucture.Mapper.Street.StreetMapper;
import mobileshop.Repository.StreetRepository;
import mobileshop.Service.CityService;
import mobileshop.Service.StreetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StreetImpl implements StreetService {

    @Autowired
    private StreetRepository streetRepository;

    @Autowired
    private CityService cityService;

    @Override
    public StreetDto saveStreet(StreetDto streetDto, Long id) {
        Street street = StreetMapper.INSTANCE.apply(streetDto);
        street.setCity( CityMapper.INSTANCE.apply(cityService.cityId(id)));
        Street saveStreet = streetRepository.save(street);
        return StreetDtoMapper.INSTANCE.apply(saveStreet);
    }

    @Override
    public StreetDto deleteStreet(Long id) {
        Street street = streetRepository.findById(id).orElseThrow(()-> new RuntimeException("No found id"));
        streetRepository.deleteById(id);
        return StreetDtoMapper.INSTANCE.apply(street);
    }
}
