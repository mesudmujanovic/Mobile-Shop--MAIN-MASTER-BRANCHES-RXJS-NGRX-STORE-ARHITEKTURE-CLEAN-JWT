import { ActionReducerMap } from "@ngrx/store";
import { userReducer } from "./reducers";
import { AppState } from "../state/app.state";


export const appReducers: ActionReducerMap< AppState, any > = {
    user: userReducer
}