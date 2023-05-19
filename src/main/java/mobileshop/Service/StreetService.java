package mobileshop.Service;

import mobileshop.Infrastucture.DTO.Street.StreetDto;

public interface StreetService {

    public StreetDto saveStreet (StreetDto streetDto);

    public StreetDto deleteStreet(Long id);
}
