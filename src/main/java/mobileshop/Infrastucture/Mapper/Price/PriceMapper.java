package mobileshop.Infrastucture.Mapper.Price;

import mobileshop.Entity.Price;
import mobileshop.Infrastucture.Dto.PriceDto;
import mobileshop.Intergration.DtoMapper;

public enum PriceMapper implements DtoMapper<Price, PriceDto> {
    INSTANCE;

    @Override
    public Price apply(PriceDto priceDto) {
        Price price = new Price();
        price.setId(priceDto.getId());
        price.setPrice(priceDto.getPrice());
        price.setOneTime(priceDto.getOneTime());
        price.setContactDuration(priceDto.getContactDuration());
        return price;
    }
}
