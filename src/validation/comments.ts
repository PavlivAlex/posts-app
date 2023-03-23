import * as Yup from 'yup';

export const CommentsValidationSchema = Yup.object().shape({
  body: Yup.string().required('Write something to add a comment'),
});
