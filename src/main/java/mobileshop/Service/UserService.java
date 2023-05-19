package mobileshop.Service;
import mobileshop.Infrastucture.DTO.User.UserDto;

public interface UserService {

    public  void register(UserDto userDto) throws Exception;
}
