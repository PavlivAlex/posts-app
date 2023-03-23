import { IComment } from './comment';

export interface IPost {
  id: number;
  body: string;
  title: string;
  comments?: IComment[];
}
