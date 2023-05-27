package CityServiceTest;

import mobileshop.Entity.City;
import mobileshop.Infrastucture.DTO.CityDto;
import mobileshop.Repository.CityRepository;
import mobileshop.Service.Impl.CityImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

public class CityServiceTest {

    @InjectMocks
    private CityImpl cityService;

    @Mock
    private CityRepository cityRepository;

    @BeforeEach
    public void setUp() {
        openMocks(this);
    }

    @Test
    public void testCreateNewCity() {
        CityDto cityDto = new CityDto();
        cityDto.setId(1L);
        cityDto.setName("NewYork");
        cityDto.setStreets(new ArrayList<>());

        City expectedCity = createCityData();

        when(cityRepository.save(Mockito.any(City.class))).thenReturn(expectedCity);

        CityDto result = cityService.saveCity(cityDto);

        assertNotNull(result);
        assertEquals(expectedCity.getId(), result.getId());
        assertEquals(expectedCity.getName(), result.getName());
    }

    private City createCityData(){
        return City.builder()
                .id(1L)
                .name("NewYork")
                .streets(new ArrayList<>())
                .build();
    }
}
