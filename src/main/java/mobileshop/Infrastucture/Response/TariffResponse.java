package mobileshop.Infrastucture.Response;

import lombok.Data;
import mobileshop.Infrastucture.DTO.PriceDto;

import java.util.List;

@Data
public class TariffResponse {

    private Long id;

    private String sku;

    private Integer speed;

    private List<PriceDto> priceList;


}
