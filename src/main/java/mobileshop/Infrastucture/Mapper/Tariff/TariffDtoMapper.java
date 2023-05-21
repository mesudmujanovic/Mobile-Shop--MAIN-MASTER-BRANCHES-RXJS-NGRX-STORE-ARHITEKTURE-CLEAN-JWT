package mobileshop.Infrastucture.Mapper.Tariff;

import mobileshop.Entity.Tariff;
import mobileshop.Infrastucture.DTO.Tariff.TariffDto;
import mobileshop.Intergration.DtoMapper;

public enum TariffDtoMapper implements DtoMapper<TariffDto, Tariff> {
   INSTANCE;

    @Override
    public TariffDto apply(Tariff tariff) {
        TariffDto tariffDto = new TariffDto();
        tariffDto.setId(tariff.getId());
        tariffDto.setSku(tariff.getSku());
        tariffDto.setSpeed(tariff.getSpeed());
        return tariffDto;
    }
}
