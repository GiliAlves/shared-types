import { GeneroType, ResidenteType, StatusIgrejaType } from "../types/igreja.type";
import { SalaNomeType, StatusSalaType } from "../types/salas.type";
import { Chamada } from "./chamada.interface";
import { StatisticsHistory } from "./statistics.interface";

export interface Salas {
    id: string;
    nome: SalaNomeType;
    descricao: string;
    faixaEtaria: string;
    professores: SalaMembro[];
    alunos: SalaMembro[];
    estatisticas: {
        igreja: {
            comungantes: StatisticsHistory[];
            naoComungantes: StatisticsHistory[];
            separados: StatisticsHistory[];
            excluidos: StatisticsHistory[];
            visitantes: StatisticsHistory[];
            total: StatisticsHistory[];
        };
        sala: {
            alunos: StatisticsHistory[];
            professores: StatisticsHistory[];
            visitantes: StatisticsHistory[];
            nda: StatisticsHistory[];
            masculinos: StatisticsHistory[];
            femininos: StatisticsHistory[];
            mediaIdade: StatisticsHistory[];
            frequencia: StatisticsHistory[];
            total: StatisticsHistory[];
        }
    }
}

export interface SalaMembro {
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

