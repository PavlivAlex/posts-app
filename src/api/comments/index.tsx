import { apiConfig } from '../../config';
import { APIService } from '../axiosInstance';
import { AddCommentBodyModel } from '../../apiAdapters/comments';

export const commentsAPI = {
  addComment: async (data: AddCommentBodyModel) => {
    return APIService.post(`${apiConfig}/comments`, data, {}).then(({ data }) => data);
  },
};
