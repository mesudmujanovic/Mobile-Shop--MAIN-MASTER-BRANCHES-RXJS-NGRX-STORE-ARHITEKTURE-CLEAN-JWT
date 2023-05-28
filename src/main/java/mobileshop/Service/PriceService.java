package mobileshop.Service;

import mobileshop.Infrastucture.Dto.PriceDto;

import java.util.List;

public interface PriceService {

    public PriceDto savePrice(PriceDto priceDto, Long id);

    public List<PriceDto> getAllPrice();
}
