export interface Vote {
    electionId: string;
    scrutinyId: string;
    userId: string;
    candidateIds: string[];
    timestamp: string;
}
