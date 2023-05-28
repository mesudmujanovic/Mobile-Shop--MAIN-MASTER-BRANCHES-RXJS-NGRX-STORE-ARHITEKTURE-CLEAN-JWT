package mobileshop.Infrastucture.Mapper.Price;

import mobileshop.Entity.Price;
import mobileshop.Infrastucture.Dto.PriceDto;
import mobileshop.Intergration.DtoMapper;

public enum PriceDtoMapper implements DtoMapper<PriceDto, Price> {
    INSTANCE;

    @Override
    public PriceDto apply(Price price) {
        PriceDto priceDto = new PriceDto();
        priceDto.setId(price.getId());
        priceDto.setPrice(price.getPrice());
        priceDto.setContactDuration(price.getContactDuration());
        priceDto.setOneTime(price.getOneTime());
        return priceDto;
    }
}
