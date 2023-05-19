package mobileshop.Service.Impl;

import mobileshop.Entity.Street;
import mobileshop.Infrastucture.DTO.Street.StreetDto;
import mobileshop.Infrastucture.Mapper.Street.StreetDtoMapper;
import mobileshop.Infrastucture.Mapper.Street.StreetMapper;
import mobileshop.Repository.StreetRepository;
import mobileshop.Service.StreetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StreetImpl implements StreetService {

    @Autowired
    private StreetRepository streetRepository;

    @Override
    public StreetDto saveStreet(StreetDto streetDto) {
        Street street = StreetMapper.INSTANCE.apply(streetDto);
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
