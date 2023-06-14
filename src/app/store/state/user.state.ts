import { Tariff } from "src/app/Interface/Tariff.interface";

export interface SalesUserState {
    city: any;
    user: any[];
    tariff: Tariff[];
    selectedTariff: any;
}

export const initalUserState: SalesUserState = {
    user: [],
    city: [],
    tariff: [],
    selectedTariff: []
}
