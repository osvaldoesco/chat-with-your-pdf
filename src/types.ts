export enum SenderType {
  USER = 'USER',
  AI = 'IA'
}

export interface Messages {
  type: SenderType;
  content: string;
  citations?: string[]
}

export interface messageResponse {
  citations: string[]
  confidence_score: string
  text: string
}
export interface ChatPDFResponse {
  message: messageResponse
}
