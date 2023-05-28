package mobileshop.Service;
import mobileshop.Infrastucture.Dto.UserDto;

public interface UserService {

    public  void register(UserDto userDto) throws Exception;
}
