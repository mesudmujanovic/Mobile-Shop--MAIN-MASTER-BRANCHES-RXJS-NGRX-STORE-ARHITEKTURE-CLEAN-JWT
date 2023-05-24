import { UserAction, _SaveCity, _SaveTariff, _SaveUser } from '../action/action';
import { SalesUserState, initalUserState } from '../state/user.state';


export const userReducer =
 ( state = initalUserState,
  action: UserAction ):
   SalesUserState => {
    switch(action.type){
        case _SaveUser.AddUser:
            return {
                ...state,
                user: action.payload
            }
            break;
        case _SaveCity.AddCity:
            return{
                ...state,
                city:action.payload
            }
            break;
        case _SaveTariff.AddTariff:
            return{
                ...state,
                tariff: action.payload
            }
            //tarif sacuvan tako da moze samo jedna tarifa da se izabere.. to sam uradio zbog vezbanja
    }
}