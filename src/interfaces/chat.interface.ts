export interface Chat {
    id: string,
    role: string,
    content: string,
    time: string,
    showAnswer: boolean,
    asnwer?: Array<{ text: string, value: string }>,
    response?: string,
    responseTime?: string
}
