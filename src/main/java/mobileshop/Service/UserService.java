package mobileshop.Service;
import mobileshop.Infrastucture.DTO.UserDto;

public interface UserService {

    public  void register(UserDto userDto) throws Exception;
}
