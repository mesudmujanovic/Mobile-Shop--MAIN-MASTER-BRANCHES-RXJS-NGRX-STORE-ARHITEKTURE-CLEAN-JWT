package mobileshop.Infrastucture.Mapper.Tariff;

import mobileshop.Entity.Tariff;
import mobileshop.Infrastucture.DTO.Tariff.TariffDto;
import mobileshop.Intergration.DtoMapper;

public enum TariffMapper  implements DtoMapper<Tariff, TariffDto> {
    INSTANCE;

    @Override
    public Tariff apply(TariffDto tariffDto) {
        Tariff tariff = new Tariff();
        tariff.setId(tariffDto.getId());
        tariff.setSku(tariffDto.getSku());
        tariff.setSpeed(tariffDto.getSpeed());
        return tariff;
    }
}
