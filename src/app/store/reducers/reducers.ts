import { UserAction, _SaveUser } from '../action/action';
import { UserState, initalUserState } from '../state/user.state';


export const userReducer = ( state = initalUserState, action: UserAction ): UserState => {
    switch(action.type){
        case _SaveUser.AddUser:
            return {
                ...state,
                user: [...state.user, action.payload]
            }
    }
}