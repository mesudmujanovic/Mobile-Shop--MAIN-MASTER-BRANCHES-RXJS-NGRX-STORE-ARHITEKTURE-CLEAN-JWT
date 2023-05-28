package mobileshop.Infrastucture.Mapper.Tariff;

import mobileshop.Entity.Tariff;
import mobileshop.Infrastucture.Dto.TariffDto;
import mobileshop.Infrastucture.Mapper.Price.PriceDtoMapper;
import mobileshop.Intergration.DtoMapper;

import java.util.stream.Collectors;

public enum TariffDtoMapper implements DtoMapper<TariffDto, Tariff> {
   INSTANCE;

    @Override
    public TariffDto apply(Tariff tariff) {
        TariffDto tariffDto = new TariffDto();
        tariffDto.setId(tariff.getId());
        tariffDto.setSku(tariff.getSku());
        tariffDto.setSpeed(tariff.getSpeed());
        tariffDto.setPriceList(tariff.getPriceList().stream().map(prices -> PriceDtoMapper.INSTANCE.apply(prices)).collect(Collectors.toList()));
        return tariffDto;
    }
}
