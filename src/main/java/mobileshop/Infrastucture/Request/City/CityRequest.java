package mobileshop.Infrastucture.Request.City;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mobileshop.Infrastucture.DTO.Street.StreetDto;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CityRequest {

    public String name;

    public List<StreetDto> streets;
}
