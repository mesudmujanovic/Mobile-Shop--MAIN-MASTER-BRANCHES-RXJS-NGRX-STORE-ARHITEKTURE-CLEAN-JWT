package mobileshop.Infrastucture.Mapper.Tariff;

import mobileshop.Entity.Tariff;
import mobileshop.Infrastucture.Dto.TariffDto;
import mobileshop.Infrastucture.Mapper.Price.PriceMapper;
import mobileshop.Intergration.DtoMapper;

import java.util.stream.Collectors;

public enum TariffMapper  implements DtoMapper<Tariff, TariffDto> {
    INSTANCE;

    @Override
    public Tariff apply(TariffDto tariffDto) {
        Tariff tariff = new Tariff();
        tariff.setId(tariffDto.getId());
        tariff.setSku(tariffDto.getSku());
        tariff.setSpeed(tariffDto.getSpeed());
        tariff.setPriceList(tariffDto.getPriceList().stream().map(prices-> PriceMapper.INSTANCE.apply(prices)).collect(Collectors.toList()));
         return tariff;
    }
}
