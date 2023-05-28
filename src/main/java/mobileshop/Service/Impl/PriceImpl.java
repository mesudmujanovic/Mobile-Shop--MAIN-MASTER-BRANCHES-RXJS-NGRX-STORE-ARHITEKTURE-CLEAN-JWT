package mobileshop.Service.Impl;

import mobileshop.Entity.Price;
import mobileshop.Infrastucture.Dto.PriceDto;
import mobileshop.Infrastucture.Mapper.Price.PriceDtoMapper;
import mobileshop.Infrastucture.Mapper.Price.PriceMapper;
import mobileshop.Infrastucture.Mapper.Tariff.TariffMapper;
import mobileshop.Repository.PriceRepository;
import mobileshop.Service.PriceService;
import mobileshop.Service.TariffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PriceImpl implements PriceService {

    @Autowired
    private PriceRepository priceRepository;
    @Autowired
    TariffService tariffService;


    @Override
    public PriceDto savePrice(PriceDto priceDto, Long id) {
        Price price = PriceMapper.INSTANCE.apply(priceDto);
        price.setTariff(TariffMapper.INSTANCE.apply(tariffService.tarrifId(id)));
        Price priceSave = priceRepository.save(price);
        return PriceDtoMapper.INSTANCE.apply(priceSave);
    }

    @Override
    public List<PriceDto> getAllPrice() {
        List<Price> priceList = priceRepository.findAll();
        return priceList.stream().map(prices-> PriceDtoMapper.INSTANCE.apply(prices)).collect(Collectors.toList());
    }
}
