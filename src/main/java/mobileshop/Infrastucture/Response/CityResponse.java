package mobileshop.Infrastucture.Response;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mobileshop.Infrastucture.Dto.StreetDto;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CityResponse {

    private Long id;

    private String name;

    private List<StreetDto> streets;
}
