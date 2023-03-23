import * as Yup from 'yup';

export const PostValidationSchema = Yup.object().shape({
  title: Yup.string()
    .test('len', 'Title must be at least 3 characters', name => (name || '').toString().length >= 3)
    .required('Title is required!'),
  body: Yup.string()
    .test('len', 'Body must be at least 10 characters', name => (name || '').toString().length >= 10)
    .required('Body is required!'),
});
