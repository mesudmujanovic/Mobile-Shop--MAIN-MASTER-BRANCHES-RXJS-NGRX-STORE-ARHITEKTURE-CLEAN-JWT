package mobileshop.Infrastucture.Mapper.Street;

import mobileshop.Entity.Street;
import mobileshop.Infrastucture.DTO.StreetDto;
import mobileshop.Intergration.DtoMapper;

public enum StreetMapper implements DtoMapper<Street, StreetDto> {
    INSTANCE;

    @Override
    public Street apply(StreetDto streetDto) {
        Street street = new Street();
        street.setId(streetDto.getId());
        street.setName(streetDto.getName());
        return street;
    }
}
