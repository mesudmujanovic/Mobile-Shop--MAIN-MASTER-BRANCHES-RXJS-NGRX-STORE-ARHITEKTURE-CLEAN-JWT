import { Street } from "./Street.interface";

export interface City {
    id: number,
    name: string,
    streets: Street[];
}