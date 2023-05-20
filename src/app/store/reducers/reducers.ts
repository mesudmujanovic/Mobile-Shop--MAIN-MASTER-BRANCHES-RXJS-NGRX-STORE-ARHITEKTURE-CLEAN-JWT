import { UserAction, _SaveCity, _SaveUser } from '../action/action';
import { SalesUserState, initalUserState } from '../state/user.state';


export const userReducer =
 ( state = initalUserState,
  action: UserAction ):
   SalesUserState => {
    switch(action.type){
        case _SaveUser.AddUser:
            return {
                ...state,
                user: [...state.user, action.payload]
            }
            break;
        case _SaveCity.AddCity:
            return{
                ...state,
                city:[...state.city, action.payload]
            }
    }
}