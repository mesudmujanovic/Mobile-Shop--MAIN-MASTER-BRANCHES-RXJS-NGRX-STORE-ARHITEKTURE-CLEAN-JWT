package mobileshop.Service.Impl;

import mobileshop.Entity.Tariff;
import mobileshop.Infrastucture.Dto.TariffDto;
import mobileshop.Infrastucture.Mapper.Tariff.TariffDtoMapper;
import mobileshop.Infrastucture.Mapper.Tariff.TariffMapper;
import mobileshop.Repository.TariffRepository;
import mobileshop.Service.TariffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<TariffDto> allTariffs() {
        List<Tariff> tariffList = tariffRepository.findAll();
        return  tariffList.stream().map(allTariff -> TariffDtoMapper.INSTANCE.apply(allTariff)).collect(Collectors.toList());
    }

    @Override
    public TariffDto tarrifId(Long id) {
        Tariff tariff = tariffRepository.findById(id).orElseThrow(()->new RuntimeException("no such"));
        return TariffDtoMapper.INSTANCE.apply(tariff);
    }

}
