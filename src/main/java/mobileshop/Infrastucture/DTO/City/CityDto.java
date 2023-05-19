package mobileshop.Infrastucture.DTO.City;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mobileshop.Infrastucture.DTO.Street.StreetDto;
import mobileshop.Infrastucture.Mapper.City.CityDtoMapper;
import mobileshop.Infrastucture.Mapper.City.CityMapper;
import mobileshop.Infrastucture.Mapper.Street.StreetDtoMapper;
import mobileshop.Infrastucture.Mapper.Street.StreetMapper;
import mobileshop.Infrastucture.Request.City.CityRequest;
import mobileshop.Infrastucture.Response.City.CityResponse;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CityDto {

    private Long id;
    private String name;

    private List<StreetDto> streets;

    public static CityDto fromRequestToDto (CityRequest cityRequest){
        CityDto cityDto = new CityDto();
        cityDto.setName(cityRequest.getName());
        cityDto.setStreets(cityRequest.getStreets().stream().map( street -> StreetDtoMapper.INSTANCE.apply(StreetMapper.INSTANCE.apply(street))).collect(Collectors.toList()));
        return cityDto;
    }

    public CityResponse fromDtoToResponse(){
        CityResponse cityResponse = new CityResponse();
        cityResponse.setId(this.getId());
        cityResponse.setName(this.getName());
        cityResponse.setStreets(this.getStreets());
        return cityResponse;
    }
}
