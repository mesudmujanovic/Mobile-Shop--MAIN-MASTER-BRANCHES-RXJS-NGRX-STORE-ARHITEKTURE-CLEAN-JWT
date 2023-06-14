import { Action } from "@ngrx/store";
import { City } from "src/app/Interface/CityInterface";
import { Tariff } from "src/app/Interface/Tariff.interface";
import { User } from "src/app/Interface/User.interface";

export enum _SaveUser {
    AddUser = '[User] Add User'
}
export class AddUser implements Action {
    public readonly type = _SaveUser.AddUser;
    constructor(public payload: User) { }
}
///////////////////
//  Payload sluzi za prenos podataka u novoj instanci clase AddUser kada se pozove
// distpach(new AddUser(user)) i salje se u funckiju reducer
// readonly i enumeracija sluze da se ne bi stvarali greske pri kucanju koda u reduceru...vec da bi ostalo sve nepromenjeno i olaksano
export enum _SaveCity {
    AddCity = '[City] Add City'
}
export class AddCity implements Action {
    public readonly type = _SaveCity.AddCity;
    constructor(public payload: City) { }
}
//////////

export enum _SaveTariff {
    AddTariff = '[Tariff] Add Tariff'
}
export class AddTariff implements Action {
    public readonly type = _SaveTariff.AddTariff;
    constructor(public payload: Tariff) { }
}
/////////////

export enum _SelectedTariff {
    SelectTariff = '[Select] Selected Tariff'
}

export class SelectedTariff implements Action {
    public readonly type = _SelectedTariff.SelectTariff;
    constructor(public payload: Tariff) { }
}
/////////////

export type UserAction = AddUser | AddCity | AddTariff | SelectedTariff;