package mobileshop.Infrastucture.Dto;

import lombok.Data;
import mobileshop.Infrastucture.Mapper.Price.PriceDtoMapper;
import mobileshop.Infrastucture.Mapper.Price.PriceMapper;
import mobileshop.Infrastucture.Request.TariffRequest;
import mobileshop.Infrastucture.Response.TariffResponse;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class TariffDto {

    private Long id;

    private String sku;

    private Integer speed;

    private List<PriceDto> priceList;



    public static TariffDto fromRequestToDto(TariffRequest tariffRequest){
        TariffDto tariffDto = new TariffDto();
        tariffDto.setSku(tariffRequest.getSku());
        tariffDto.setSpeed(tariffRequest.getSpeed());
        tariffDto.setPriceList(tariffRequest.getPriceList().stream().map(prices -> PriceDtoMapper.INSTANCE.apply(PriceMapper.INSTANCE.apply(prices))).collect(Collectors.toList()));
        return tariffDto;
    }

    public TariffResponse fromDtoToResponse(){
        TariffResponse tariffResponse = new TariffResponse();
        tariffResponse.setId(this.getId());
        tariffResponse.setSku(this.getSku());
        tariffResponse.setSpeed(this.getSpeed());
        tariffResponse.setPriceList(this.getPriceList());
        return tariffResponse;
    }
}
