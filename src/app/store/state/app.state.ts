import {SalesUserState, initalUserState } from './user.state';

//globalno stanje aplikacije
export interface AppState {
    allInfo: SalesUserState;
}
//pocetno stanje aplikacije
export const initalAppState: AppState = {
    allInfo: initalUserState
}
//funckija koja vraca initalAppState 
export function getInitialState(): AppState {
    return initalAppState;
}