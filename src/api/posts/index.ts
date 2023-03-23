import { IPost } from '../../interfaces/post';
import { apiConfig } from '../../config';
import { APIService } from '../axiosInstance';
import { postsAdapter } from '../../apiAdapters/posts';
import { FormValuesModel } from '../../components/Forms/TemplateForms/Posts';

const postsAPI = {
  getAllPosts: async () => {
    return APIService.get<IPost[]>(`${apiConfig}/posts`).then(({ data }) => postsAdapter.getPosts(data));
  },
  getFullInfoAboutPost: async (postId: number) => {
    return APIService.get<IPost>(`${apiConfig}/posts/${postId}?_embed=comments`).then(({ data }) => data);
  },
  createPost: async (values: { title: string; body: string }) => {
    return APIService.post<IPost>(`${apiConfig}/posts`, values).then(({ data }) => data);
  },
  updatePost: async (postId: number, postInfo: FormValuesModel) => {
    return APIService.put(`${apiConfig}/posts/${postId}`, postInfo).then(({ data }) => data);
  },
  deletePost: async (postId: number) => {
    return APIService.delete(`${apiConfig}/posts/${postId}`).then(({ data }) => data);
  },
};

export default postsAPI;
