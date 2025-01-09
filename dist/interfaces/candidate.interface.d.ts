import { StatusIgrejaType, ResidenteType, GeneroType } from "../types/igreja.type";
import { SociedadeStatusType } from "../types/sociedades.type";
export interface Candidate {
    id: string;
    foto: string;
    nome: string;
    email: string | null;
    statusIgreja: StatusIgrejaType;
    dtNasc: string;
    genero: GeneroType;
    celular: string | null;
    isAbsent?: boolean;
    residente: ResidenteType;
    statusSociedade: SociedadeStatusType;
    votes: number;
    isVoter?: boolean;
}
