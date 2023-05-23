import { Action } from "@ngrx/store";
import { City } from "src/app/Interface/CityInterface";
import { Tariff } from "src/app/Interface/Tariff.interface";
import { User } from "src/app/Interface/User.interface";

export enum _SaveUser {
    AddUser = '[User] Add User'
}

export enum _SaveCity{
    AddCity = '[City] Add City'
}

export enum _SaveTariff{
    AddTariff = '[Tariff] Add Tariff'
}


export class AddUser implements Action {
    public readonly type = _SaveUser.AddUser;
    constructor(public payload: User) {}
}

export class AddCity implements Action{
    public readonly type = _SaveCity.AddCity;
    constructor(public payload: City){}
}

export class AddTariff implements Action{
    public readonly type = _SaveTariff.AddTariff;
    constructor(public payload: Tariff){}
}

export type UserAction = AddUser | AddCity | AddTariff;