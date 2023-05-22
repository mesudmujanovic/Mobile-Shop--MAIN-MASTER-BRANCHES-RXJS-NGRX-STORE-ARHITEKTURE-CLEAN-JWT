package mobileshop.Service;

import mobileshop.Infrastucture.DTO.TariffDto;

import java.util.List;

public interface TariffService {

    public TariffDto saveTariff(TariffDto tariffDto);

    public List<TariffDto> allTariffs ();

    public TariffDto tarrifId(Long id);
}
