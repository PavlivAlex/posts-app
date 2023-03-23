import React from 'react';

// helpers
import { CommentsValidationSchema } from '../../../../validation/comments';

// components
import Form from '../../Form';
import InnerForm from './InnerForm';

export interface FormValuesModel {
  body: string;
}

interface IProps {
  initialFormValues: FormValuesModel;
  onSubmit: (values: FormValuesModel) => void;
}

const CommentForm = ({ initialFormValues, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText='Add comment'
      renderForm={<InnerForm />}
      initialValues={initialFormValues}
      validationSchema={CommentsValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default CommentForm;
