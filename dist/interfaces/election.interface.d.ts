import { Candidate } from "./candidate.interface";
import { MemberElection } from "./membros-comungantes.interface";
import { Vote } from "./vote.interface";
export interface Election {
    id: string;
    title: string;
    description?: string;
    type: string;
    date: string;
    startTime: string;
    endTime: string;
    status: 'scheduled' | 'active' | 'closed';
    allowBlankVote: boolean;
    isOnlyForAdults: boolean;
    scrutinies: Scrutiny[];
    sociedades?: string;
}
export interface Scrutiny {
    scrutinyId: string;
    passKey: string;
    status: 'scheduled' | 'active' | 'closed';
    scrutiny: number;
    maxVotes: string;
    timer: string;
    startTime: string;
    endTime: string;
    voters: MemberElection[];
    options: string[];
    candidates: Candidate[];
    votes: Vote[];
    elected: Candidate[];
}
