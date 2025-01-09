import { EstadoCivilType, GeneroType, LiderancaType, ResidenteType, StatusIgrejaType } from "../types/igreja.type";
import { SalaNomeType, StatusSalaType } from "../types/salas.type";
import { SociedadeStatusType, SociedadeType } from "../types/sociedades.type";
import { Chamada } from "./chamada.interface";
export interface Membros {
    id: string;
    foto?: string;
    nome: string;
    dtNasc: string;
    genero?: GeneroType;
    estadoCivil?: EstadoCivilType;
    conjuge?: string;
    conjugeId?: string;
    dataCasamento?: string;
    cep?: string;
    logradouro?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    complemento?: string;
    email?: string;
    telefone?: string;
    celular?: string;
    membro: Membro;
    observacao?: string;
}
export interface Membro {
    status: StatusIgrejaType;
    lideranca?: LiderancaType;
    dataEntrada?: Date;
    residente: ResidenteType;
    sociedade: Sociedade[];
    salaEbd: Ebd;
    cargo: Cargo[];
    responsavel: string;
    dataBatismo: string;
    oficianteBatismo: string;
    dataProfissãoFé: string;
    oficianteProfissãoFé: string;
    frequenciaCulto?: Chamada[];
    acompanhamentos: Acompanhamento[];
}
export interface Acompanhamento {
    id?: string;
    data: string;
    ano: string;
    mes: string;
    dia: string;
    horario: string;
    title?: string;
    description?: string;
    avaliacao: number;
    inicio?: boolean;
    fim?: boolean;
}
export interface Sociedade {
    nome: SociedadeType;
    status: SociedadeStatusType;
}
export interface Cargo {
    nome: string;
    status: boolean;
    data: Date;
    vigencia: number;
}
export interface Ebd {
    nome: SalaNomeType;
    status: StatusSalaType;
    frequencia: Chamada[];
}
