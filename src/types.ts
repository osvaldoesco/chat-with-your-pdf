export enum SenderType {
  USER = 'USER',
  AI = 'IA'
}

export interface Messages {
  type: SenderType;
  content: string;
}