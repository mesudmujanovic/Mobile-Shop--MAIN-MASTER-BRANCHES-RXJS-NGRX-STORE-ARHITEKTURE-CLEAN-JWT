import { UserState, initalUserState } from './user.state';


export interface AppState {
    user: UserState;
}

export const initalAppState: AppState = {
    user: initalUserState
}

export function getInitialState(): AppState {
    return initalAppState;
}