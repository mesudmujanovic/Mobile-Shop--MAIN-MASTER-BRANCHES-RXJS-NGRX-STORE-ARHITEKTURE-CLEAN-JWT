import {SalesUserState, initalUserState } from './user.state';


export interface AppState {
    user: SalesUserState;
}

export const initalAppState: AppState = {
    user: initalUserState
}

export function getInitialState(): AppState {
    return initalAppState;
}