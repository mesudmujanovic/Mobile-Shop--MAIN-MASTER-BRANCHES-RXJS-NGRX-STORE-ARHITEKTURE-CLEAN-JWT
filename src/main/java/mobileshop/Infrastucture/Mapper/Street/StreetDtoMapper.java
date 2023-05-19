package mobileshop.Infrastucture.Mapper.Street;

import mobileshop.Entity.Street;
import mobileshop.Infrastucture.DTO.Street.StreetDto;
import mobileshop.Intergration.DtoMapper;

public enum StreetDtoMapper implements DtoMapper<StreetDto, Street> {
    INSTANCE;

    @Override
    public StreetDto apply(Street street) {
       StreetDto streetDto = new StreetDto();
       streetDto.setId(street.getId());
       streetDto.setName(street.getName());
        return streetDto;
    }
}
