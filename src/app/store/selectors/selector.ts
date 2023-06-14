import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { SalesUserState } from "../state/user.state";

//uzima stanje iz globalnog stanja AppState koje odgovara korisniku allInfo.
//Uzima AppState kao argument i vraca allInfo
const userSelectors = (state: AppState) => state.allInfo;

//
export const getUser = createSelector(
    userSelectors,
    (state: SalesUserState) => state.user
);

export const getTariff = createSelector(
    userSelectors,
    (state: SalesUserState) => state.tariff
)

export const getCity = createSelector(
    userSelectors,
    (state: SalesUserState) => state.city
)

export const getSelectTariff = createSelector(
    userSelectors,
    (state: SalesUserState) => state.selectedTariff
)