import { Action } from "@ngrx/store";
import { City } from "src/app/Interface/CityInterface";
import { User } from "src/app/Interface/User.interface";

export enum _SaveUser {
    AddUser = '[User] Add User'
}

export enum _SaveCity{
    AddCity = '[City] Add City'
}

export class AddUser implements Action {
    public readonly type = _SaveUser.AddUser;
    constructor(public payload: User) {}
}

export class AddCity implements Action{
    public readonly type = _SaveCity.AddCity;
    constructor(public payload: City){}
}

export type UserAction = AddUser | AddCity;