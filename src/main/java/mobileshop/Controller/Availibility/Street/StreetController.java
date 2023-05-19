package mobileshop.Controller.Availibility.Street;


import mobileshop.Infrastucture.DTO.Street.StreetDto;
import mobileshop.Infrastucture.Request.Street.StreetRequest;
import mobileshop.Infrastucture.Response.Street.StreetResponse;
import mobileshop.Service.StreetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class StreetController {

    @Autowired
    private StreetService streetService;

    @PostMapping("/street")
    public ResponseEntity<StreetResponse> saveStreet(@RequestBody StreetRequest streetRequest){
        StreetDto streetDto = StreetDto.fromRequestToDto(streetRequest);
        StreetDto saveStreet = streetService.saveStreet(streetDto);
        return ResponseEntity.ok(saveStreet.fromDtoToResponse());
    }

    @DeleteMapping("/deleteStreet/{id}")
    public ResponseEntity<StreetResponse> deleteStreet(@PathVariable Long id){
        return ResponseEntity.ok(streetService.deleteStreet(id).fromDtoToResponse());
    }
}
