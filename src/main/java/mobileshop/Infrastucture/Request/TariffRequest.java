package mobileshop.Infrastucture.Request;

import lombok.Data;
import mobileshop.Entity.Price;
import mobileshop.Infrastucture.DTO.PriceDto;

import java.util.List;

@Data
public class TariffRequest {

    private String sku;
    private Integer speed;

    private List<PriceDto> priceList;
}
