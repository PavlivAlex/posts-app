import { FormValuesModel } from '../../components/Forms/TemplateForms/Comments';

export interface AddCommentBodyModel {
  postId: number;
  name: string;
  email: string;
  body: string;
}

export const commentsAdapter = {
  addComment: (formValues: FormValuesModel, postId: number) => {
    return {
      postId,
      name: 'John Doe',
      email: 'johndoe@anymail.com',
      body: formValues.body,
    };
  },
};
