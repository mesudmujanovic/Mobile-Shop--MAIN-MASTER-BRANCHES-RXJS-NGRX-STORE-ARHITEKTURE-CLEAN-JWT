import { City } from "src/app/Interface/CityInterface";
import { Tariff } from "src/app/Interface/Tariff.interface";
import { User } from "src/app/Interface/User.interface";

export interface SalesUserState {
    city: City[];
    user: User[];
    tariff: any;
}


export const initalUserState: SalesUserState = {
    user: [],
    city:[],
    tariff:[]
}
