package mobileshop.Infrastucture.DTO.City;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mobileshop.Infrastucture.Request.City.CityRequest;
import mobileshop.Infrastucture.Response.City.CityResponse;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CityDto {

    private Long id;
    private String name;

    public static CityDto fromRequestToDto (CityRequest cityRequest){
        CityDto cityDto = new CityDto();
        cityDto.setName(cityRequest.getName());
        return cityDto;
    }

    public CityResponse fromDtoToResponse(){
        CityResponse cityResponse = new CityResponse();
        cityResponse.setId(this.getId());
        cityResponse.setName(this.getName());
        return cityResponse;
    }
}
