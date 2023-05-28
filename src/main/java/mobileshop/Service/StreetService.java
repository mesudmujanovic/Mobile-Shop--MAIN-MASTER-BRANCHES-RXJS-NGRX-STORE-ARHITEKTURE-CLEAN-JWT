package mobileshop.Service;

import mobileshop.Infrastucture.Dto.StreetDto;

public interface StreetService {

    public StreetDto saveStreet (StreetDto streetDto, Long id);

    public StreetDto deleteStreet(Long id);
}
