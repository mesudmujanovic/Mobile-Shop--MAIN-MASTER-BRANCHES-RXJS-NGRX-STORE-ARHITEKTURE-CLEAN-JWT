package mobileshop.Controller.Availibility.City;


import mobileshop.Infrastucture.DTO.CityDto;
import mobileshop.Infrastucture.Request.CityRequest;
import mobileshop.Infrastucture.Response.CityResponse;
import mobileshop.Service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

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

    @GetMapping("getAllCity")
    public ResponseEntity<List<CityResponse>> getAllCity(){
        List<CityDto> cityDtos = cityService.getAllCity();
        return ResponseEntity.ok(cityDtos.stream().map(CityDto::fromDtoToResponse).collect(Collectors.toList()));

    }
}
