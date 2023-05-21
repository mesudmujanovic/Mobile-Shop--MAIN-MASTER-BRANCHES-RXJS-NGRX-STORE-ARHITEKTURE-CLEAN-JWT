package mobileshop.Infrastucture.DTO.Tariff;

import lombok.Data;
import mobileshop.Infrastucture.Request.Tariff.TariffRequest;
import mobileshop.Infrastucture.Response.Tariff.TariffResponse;

@Data
public class TariffDto {

    private Long id;

    private String sku;

    private Integer speed;

    public static TariffDto fromRequestToDto(TariffRequest tariffRequest){
        TariffDto tariffDto = new TariffDto();
        tariffDto.setSku(tariffRequest.getSku());
        tariffDto.setSpeed(tariffRequest.getSpeed());
        return tariffDto;
    }

    public TariffResponse fromDtoToResponse(){
        TariffResponse tariffResponse = new TariffResponse();
        tariffResponse.setId(this.getId());
        tariffResponse.setSku(this.getSku());
        tariffResponse.setSpeed(this.getSpeed());
        return tariffResponse;
    }
}
