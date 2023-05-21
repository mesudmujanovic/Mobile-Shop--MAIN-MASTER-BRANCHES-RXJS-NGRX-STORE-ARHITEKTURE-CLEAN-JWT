package mobileshop.Service.Impl;

import mobileshop.Entity.Tariff;
import mobileshop.Infrastucture.DTO.Tariff.TariffDto;
import mobileshop.Infrastucture.Mapper.Tariff.TariffDtoMapper;
import mobileshop.Infrastucture.Mapper.Tariff.TariffMapper;
import mobileshop.Repository.TariffRepository;
import mobileshop.Service.TariffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TariffImpl implements TariffService {

    @Autowired
    private TariffRepository tariffRepository;

    @Override
    public TariffDto saveTariff(TariffDto tariffDto) {
        Tariff tariff = TariffMapper.INSTANCE.apply(tariffDto);
        Tariff saveTariff = tariffRepository.save(tariff);
        return TariffDtoMapper.INSTANCE.apply(saveTariff);
    }
}
