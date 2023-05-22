package mobileshop.Infrastucture.DTO;

import lombok.Data;
import mobileshop.Infrastucture.Request.PriceRequest;
import mobileshop.Infrastucture.Response.PriceResponse;

@Data
public class PriceDto {
    private Long id;

    private Double price;

    private Integer contactDuration;

    private Boolean oneTime;

    public static PriceDto fromRequestToDto(PriceRequest priceRequest){
        PriceDto priceDto = new PriceDto();
        priceDto.setPrice(priceRequest.getPrice());
        priceDto.setContactDuration(priceRequest.getContactDuration());
        priceDto.setOneTime(priceRequest.getOneTime());
        return priceDto;
    }

    public PriceResponse fromDtoToResponse (){
        PriceResponse priceResponse = new PriceResponse();
        priceResponse.setId(this.getId());
        priceResponse.setContactDuration(this.getContactDuration());
        priceResponse.setOneTime(this.getOneTime());
        priceResponse.setPrice(this.getPrice());
        return priceResponse;
    }
}
