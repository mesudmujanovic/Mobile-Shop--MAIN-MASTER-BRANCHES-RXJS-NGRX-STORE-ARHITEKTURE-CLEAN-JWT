import { City } from "src/app/Interface/CityInterface";
import { User } from "src/app/Interface/User.interface";

export interface SalesUserState {
    city: City[];
    user: User[];
}


export const initalUserState: SalesUserState = {
    user: [],
    city:[]
}
