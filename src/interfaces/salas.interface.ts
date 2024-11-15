import { GeneroType, ResidenteType, SalaNomeType, StatusIgrejaType, StatusSalaType } from "../types/salas.type";
import { Chamada } from "./chamada.interface";

export interface Salas {
    id: string;
    nome: SalaNomeType;
    description: string;
    faixaEtaria: string;
    membros: Membros[];
    estatiticas: {
        total: number;
        comungantes: number;
        naoComungantes: number;
        rolSeparado: number;
        excluidos: number;
        alunos: number;
        professores: number;
        visitantes: number;
        nda: number;
        masculinos: number;
        femininos: number;
        mediaIdade: number;
        frequencia: number;
    }
}

export interface Membros {
    id: string;
    foto?: string;
    nome: string;
    dtNasc: string;
    genero?: GeneroType;
    statusIgreja: StatusIgrejaType;
    residente: ResidenteType;
    statusSala: StatusSalaType;
    frequencia: Chamada[];
}

