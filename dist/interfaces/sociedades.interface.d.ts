import { GeneroType, ResidenteType, StatusIgrejaType } from "../types/igreja.type";
import { SociedadeStatusType, SociedadeType } from "../types/sociedades.type";
import { StatisticsHistory } from "./statistics.interface";
export interface Sociedades {
    id: string;
    nome: SociedadeType;
    descricao: string;
    faixaEtaria: string;
    membros: SociedadeMembro[];
    estatisticas: {
        igreja: {
            comungantes: StatisticsHistory[];
            naoComungantes: StatisticsHistory[];
            separados: StatisticsHistory[];
            excluidos: StatisticsHistory[];
            visitantes: StatisticsHistory[];
            total: StatisticsHistory[];
        };
        sociedade: {
            ativos: StatisticsHistory[];
            cooperadores: StatisticsHistory[];
            emeritos: StatisticsHistory[];
            conselheiros: StatisticsHistory[];
            orientadores: StatisticsHistory[];
            visitantes: StatisticsHistory[];
            masculinos: StatisticsHistory[];
            femininos: StatisticsHistory[];
            mediaIdade: StatisticsHistory[];
            total: StatisticsHistory[];
        };
        diretoria: Diretoria[];
    };
}
export interface Diretoria {
    id: string;
    data: string;
    presidente: SociedadeMembro;
    vicePresidente: SociedadeMembro;
    primeiroSecretario: SociedadeMembro;
    segundoSecretario: SociedadeMembro;
    tesoureiro: SociedadeMembro;
}
export interface SociedadeMembro {
    id: string;
    foto?: string;
    nome: string;
    email: string | null;
    statusIgreja: StatusIgrejaType;
    dtNasc: string;
    genero?: GeneroType;
    celular: string | null;
    isAbsent?: boolean;
    residente: ResidenteType;
    statusSociedade: SociedadeStatusType;
    votes: number;
    isVoter?: boolean;
}
