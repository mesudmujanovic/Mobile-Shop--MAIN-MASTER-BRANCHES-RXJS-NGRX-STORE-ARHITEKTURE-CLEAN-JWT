import { City } from "src/app/Interface/CityInterface";
import { Tariff } from "src/app/Interface/Tariff.interface";
import { User } from "src/app/Interface/User.interface";
import { SessionService } from "src/app/service/session.service";

export interface SalesUserState {
    city: City;
    user: User;
    tariff: Tariff;

}


export const initalUserState: SalesUserState = 
new SessionService().getInitalState();
