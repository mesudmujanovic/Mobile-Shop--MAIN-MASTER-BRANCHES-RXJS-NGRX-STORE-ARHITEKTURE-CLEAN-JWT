package mobileshop.Request;

import com.sun.istack.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {

    @NotNull
    private String username;

    @NotNull
    private String password;
}
