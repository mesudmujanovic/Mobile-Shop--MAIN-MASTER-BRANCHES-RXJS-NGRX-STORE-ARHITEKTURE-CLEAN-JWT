import { User } from "src/app/Interface/User.interface";

export interface UserState {
    user: User[];
}

export const initalUserState: UserState = {
    user: []
}