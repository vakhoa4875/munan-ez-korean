import { Reply } from "./Reply";

export interface Comment {
  id: number;
  avatar: string;
  name: string;
  content: string;
  replies: Reply[];
}