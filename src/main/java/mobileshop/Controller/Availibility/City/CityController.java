package mobileshop.Controller.Availibility.City;


import mobileshop.Infrastucture.DTO.City.CityDto;
import mobileshop.Infrastucture.Request.City.CityRequest;
import mobileshop.Infrastucture.Response.City.CityResponse;
import mobileshop.Service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class CityController {

    @Autowired
    private CityService cityService;

    @PostMapping("/saveCity")
    public ResponseEntity<CityResponse> saveCity(@RequestBody CityRequest cityRequest){
        CityDto cityDto = CityDto.fromRequestToDto(cityRequest);
        CityDto saveCityDto = cityService.saveCity(cityDto);
        return ResponseEntity.ok(saveCityDto.fromDtoToResponse());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<CityResponse> deleteCity(@PathVariable Long id){
        return ResponseEntity.ok(cityService.deleteCity(id).fromDtoToResponse());
    }
}
