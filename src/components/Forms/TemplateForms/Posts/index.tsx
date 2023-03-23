import React from 'react';

// helpers
import { debounce } from 'lodash';
import { FormikHelpers } from 'formik';

// components
import Form from '../../Form/index';
import InnerForm from './InnerForm';
import { PostValidationSchema } from '../../../../validation/post';

export interface FormValuesModel {
  body: string;
  title: string;
}

interface IProps {
  submitText?: string;
  initialFormValues: FormValuesModel;
  onSubmit: (values: FormValuesModel, helpers?: FormikHelpers<FormValuesModel>) => void;
}

const PostForm = ({ submitText = 'Create', initialFormValues, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText={submitText}
      renderForm={<InnerForm />}
      initialValues={initialFormValues}
      validationSchema={PostValidationSchema}
      onSubmit={debounce(onSubmit, 200)}
    />
  );
};

export default PostForm;
