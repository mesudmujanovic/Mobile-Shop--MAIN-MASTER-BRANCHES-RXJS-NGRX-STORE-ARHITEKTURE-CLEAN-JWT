import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { SalesUserState } from "../state/user.state";

const userSelectors = (state: AppState) => state.user;

export const getUser = createSelector(
    userSelectors,
    (state: SalesUserState) => state.user
);

export const getCity = createSelector(
    userSelectors,
    (state: SalesUserState) => state.city
)