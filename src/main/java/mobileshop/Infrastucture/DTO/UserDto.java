package mobileshop.Infrastucture.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mobileshop.Infrastucture.Request.User.SignupRequest;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

    private String username;

    private String password;

    public static  UserDto fromRequest(SignupRequest request){
        UserDto userDto = new UserDto();
        userDto.setUsername(request.getUsername());
        userDto.setPassword(request.getPassword());
        return userDto;
    }
}
