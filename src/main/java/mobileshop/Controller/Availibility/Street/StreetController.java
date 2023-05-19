package mobileshop.Controller.Availibility.Street;


import mobileshop.Infrastucture.DTO.Street.StreetDto;
import mobileshop.Infrastucture.Request.Street.StreetRequest;
import mobileshop.Infrastucture.Response.Street.StreetResponse;
import mobileshop.Service.StreetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class StreetController {

    @Autowired
    private StreetService streetService;

    @PostMapping("/street/cityId/{id}")
    public ResponseEntity<StreetResponse> saveStreet(@PathVariable Long id, @RequestBody StreetRequest streetRequest){
        StreetDto streetDto = StreetDto.fromRequestToDto(streetRequest);
        StreetDto saveStreet = streetService.saveStreet(streetDto,id);
        return ResponseEntity.ok(saveStreet.fromDtoToResponse());
    }

    @DeleteMapping("/deleteStreet/{id}")
    public ResponseEntity<StreetResponse> deleteStreet(@PathVariable Long id){
        return ResponseEntity.ok(streetService.deleteStreet(id).fromDtoToResponse());
    }
}
