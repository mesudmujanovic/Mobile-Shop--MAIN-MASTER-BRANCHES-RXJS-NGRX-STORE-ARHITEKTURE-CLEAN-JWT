package mobileshop.Infrastucture.Request;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mobileshop.Infrastucture.DTO.StreetDto;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CityRequest {

    public String name;

    public List<StreetDto> streets;
}
