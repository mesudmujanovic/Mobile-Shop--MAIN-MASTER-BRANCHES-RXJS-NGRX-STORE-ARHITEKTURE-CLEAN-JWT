package mobileshop.Infrastucture.Response;

import lombok.Data;

@Data
public class PriceResponse {

    private Long id;

    private Double price;

    private Integer contactDuration;

    private Boolean oneTime;
}
