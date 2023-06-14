import { UserAction, _SaveCity, _SaveTariff, _SaveUser, _SelectedTariff } from '../action/action';
import { SalesUserState, initalUserState } from '../state/user.state';

///----OBJASNJENJE---
// (state = initalUserState) je trenutno stanje usera koje je inicalizovano u initalUserState
// action:UserAction je stanje koje mi saljemo preko dispatch
// swith(action.type){
//     case _SaveUser.AddUser
// } je deo koda gde switch proverava da li je Action.type ima vrednost ono sto je u case
// return {
//     ...state,
//     user: action.payload
// }  onda se odvija blok koda koji uzimamo pocetno stanje ...state i odnosno KEY dok vrednost
//  ili VALUE menjamo pomocu user: Action.payload odnosn ono sto smo uneli preko dispatch

export const userReducer =
    (state = initalUserState,
        action: UserAction):
        SalesUserState => {
        switch (action.type) {
            case _SaveUser.AddUser:
                return {
                    ...state,
                    user: [action.payload]
                }
                break;
            case _SaveCity.AddCity:
                return {
                    ...state,
                    city: action.payload
                }
                break;
            case _SaveTariff.AddTariff:
                return {
                    ...state,
                    tariff: [action.payload]
                }
                break;
            case _SelectedTariff.SelectTariff:
                return {
                    ...state,
                    selectedTariff: action.payload
                }
                default:
            return state;
        }
    }