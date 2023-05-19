package mobileshop.Infrastucture.DTO.Street;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mobileshop.Infrastucture.Request.Street.StreetRequest;
import mobileshop.Infrastucture.Response.Street.StreetResponse;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StreetDto {

    private Long id;

    private String name;

   public static StreetDto fromRequestToDto(StreetRequest streetRequest){
       StreetDto streetDto = new StreetDto();
       streetDto.setName(streetRequest.getName());
       return streetDto;
   }

   public StreetResponse fromDtoToResponse(){
       StreetResponse streetResponse = new StreetResponse();
       streetResponse.setId(this.getId());
       streetResponse.setName(this.getName());
       return  streetResponse;
   }
}
