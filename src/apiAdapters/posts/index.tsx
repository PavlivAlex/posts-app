import { IPost } from '../../interfaces/post';

export const postsAdapter = {
  getPosts: (data: IPost[]) => data.sort((a, b) => b.id - a.id),
};
