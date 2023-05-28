package CityServiceTest;

import mobileshop.Entity.City;
import mobileshop.Infrastucture.Dto.CityDto;
import mobileshop.Repository.CityRepository;
import mobileshop.Service.Impl.CityImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

public class CityImplTest {

    @InjectMocks
    private CityImpl cityImpl;

    @Mock
    private CityRepository cityRepository;

    @BeforeEach
    public void setUp() {
        openMocks(this);
    }

    @Test
    public void testSaveCity() {
        CityDto cityDto = new CityDto();
        cityDto.setId(1L);
        cityDto.setName("NewYork");
        cityDto.setStreets(new ArrayList<>());

        City city = new City();
        city.setId(1L);
        city.setName("NewYork");
        city.setStreets(new ArrayList<>());

        when(cityRepository.save(Mockito.any(City.class))).thenReturn(city);

        CityDto result = cityImpl.saveCity(cityDto);

        assertNotNull(result);
        assertEquals(city.getId(), result.getId());
        assertEquals(city.getName(), result.getName());
    }

    @Test
    public void testDeleteCity() {
        Long id = 1L;

        City city = new City();
        city.setId(id);
        city.setName("NewYork");
        city.setStreets(new ArrayList<>());

        when(cityRepository.findById(id)).thenReturn(Optional.of(city));

        CityDto result = cityImpl.deleteCity(id);

        assertNotNull(result);
        assertEquals(city.getId(), result.getId());
        assertEquals(city.getName(), result.getName());
    }

    @Test
    public void testCityId() {
        Long id = 1L;
        City city = new City();
        city.setId(id);
        city.setName("NewYork");
        city.setStreets(new ArrayList<>());

        when(cityRepository.findById(id)).thenReturn(Optional.of(city));

        CityDto result = cityImpl.cityId(id);

        assertNotNull(result);
        assertEquals(city.getId(), result.getId());
        assertEquals(city.getName(), result.getName());
    }

    @Test
    public void testGetAllCity() {
        List<City> cityList = new ArrayList<>();
        cityList.add(new City(1L, "NewYork", new ArrayList<>()));
        cityList.add(new City(2L, "London", new ArrayList<>()));

        when(cityRepository.findAll()).thenReturn(cityList);

        List<CityDto> result = cityImpl.getAllCity();

        assertNotNull(result);
        assertEquals(cityList.size(), result.size());

        for (int i = 0; i < cityList.size(); i++) {
            City city = cityList.get(i);
            CityDto cityDto = result.get(i);
            assertEquals(city.getId(), cityDto.getId());
            assertEquals(city.getName(), cityDto.getName());
        }
    }
}
