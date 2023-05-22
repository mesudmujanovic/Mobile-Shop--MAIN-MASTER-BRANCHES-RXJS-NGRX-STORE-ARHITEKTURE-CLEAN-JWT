package mobileshop.Controller.Model;

import mobileshop.Infrastucture.DTO.TariffDto;
import mobileshop.Infrastucture.Request.TariffRequest;
import mobileshop.Infrastucture.Response.TariffResponse;
import mobileshop.Service.TariffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/api")
@RestController
@CrossOrigin("*")
public class TariffController {

    @Autowired
    private TariffService tariffService;

    @PostMapping("/tariff")
    public ResponseEntity<TariffResponse> saveTariff(@RequestBody TariffRequest tariffRequest){
        TariffDto tariffDto = TariffDto.fromRequestToDto(tariffRequest);
        TariffDto saveTariff = tariffService.saveTariff(tariffDto);
        return ResponseEntity.ok(saveTariff.fromDtoToResponse());
    }

    @GetMapping("allTariffs")
    public ResponseEntity<List<TariffResponse>> allTariffs(){
         List<TariffDto> tariffDtoList = tariffService.allTariffs();
         return  ResponseEntity.ok(tariffDtoList.stream().map(TariffDto::fromDtoToResponse).collect(Collectors.toList()));
    }
}
