import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { UserState } from "../state/user.state";


const userSelectors = (state: AppState) => state.user;

export const getUser = createSelector(
    userSelectors,
    (state: UserState) => state.user
);

