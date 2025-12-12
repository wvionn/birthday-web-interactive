export interface Photo {
  url: string;
  alt: string;
}

export interface BalloonData {
  id: number;
  x: number;
  speed: number;
  delay: number;
  color: string;
}

export type Sender = 'me' | 'user';

export interface Message {
  type: 'text';
  content: string;
  sender: Sender;
}

export interface ChatStep {
  text: string;
  sender: Sender;
  choices: string[];
}