package mobileshop.Service;

import mobileshop.Entity.Price;
import mobileshop.Infrastucture.DTO.PriceDto;

import java.util.List;

public interface PriceService {

    public PriceDto savePrice(PriceDto priceDto, Long id);

    public List<PriceDto> getAllPrice();
}
