package mobileshop.Controller.Model;


import mobileshop.Infrastucture.Dto.PriceDto;
import mobileshop.Infrastucture.Request.PriceRequest;
import mobileshop.Infrastucture.Response.PriceResponse;
import mobileshop.Service.PriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RequestMapping("/api")
@RestController()
public class PriceController {

    @Autowired
    private PriceService priceService;

    @PostMapping("/price/{id}")
    public ResponseEntity<PriceResponse> saveTariff (@RequestBody PriceRequest priceRequest, @PathVariable Long id){
        PriceDto priceDto = PriceDto.fromRequestToDto(priceRequest);
        PriceDto savePrice = priceService.savePrice(priceDto,id);
        return ResponseEntity.ok(savePrice.fromDtoToResponse());
    }

    @GetMapping("/allPrice")
    public ResponseEntity<List<PriceResponse>> getAllTariffs(){
        List<PriceDto> priceDtoList = priceService.getAllPrice();
        return ResponseEntity.ok(priceDtoList.stream().map(PriceDto::fromDtoToResponse).collect(Collectors.toList()));
    }
}
