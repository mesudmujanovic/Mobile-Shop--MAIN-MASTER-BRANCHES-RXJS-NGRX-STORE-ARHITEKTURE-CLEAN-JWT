package mobileshop.Infrastucture.Request;

import lombok.Data;

@Data
public class PriceRequest {

    private Double price;

    private Integer contactDuration;

    private Boolean oneTime;

}
