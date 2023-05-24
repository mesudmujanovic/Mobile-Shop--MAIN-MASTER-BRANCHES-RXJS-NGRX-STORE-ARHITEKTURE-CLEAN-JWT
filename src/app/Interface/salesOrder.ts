import { User } from "./User.interface";
import { Tariff } from './Tariff.interface';
import { City } from "./CityInterface";

export interface SalesOrder{
    user?: any,
    tariff?:any,
    city?: any
}