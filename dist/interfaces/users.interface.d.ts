import { RolesType } from "../types/salas.type";
export interface Users {
    id: string;
    name: string;
    email: string;
    password: string;
    role: RolesType;
    salas: string[];
}
