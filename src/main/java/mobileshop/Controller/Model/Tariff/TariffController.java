package mobileshop.Controller.Model.Tariff;

import mobileshop.Infrastucture.DTO.Tariff.TariffDto;
import mobileshop.Infrastucture.Mapper.Tariff.TariffDtoMapper;
import mobileshop.Infrastucture.Request.Tariff.TariffRequest;
import mobileshop.Infrastucture.Response.Tariff.TariffResponse;
import mobileshop.Service.TariffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
