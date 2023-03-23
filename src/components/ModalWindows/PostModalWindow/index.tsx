import React from 'react';

// helpers
import { FormikHelpers } from 'formik';

// components
import ModalWindow from '../../Antd/ModalWindow';
import PostForm, { FormValuesModel } from '../../Forms/TemplateForms/Posts';

export enum PostFormTitleEnum {
  Create = 'Creating post',
  Update = 'Updating post',
}

interface IProps {
  title: PostFormTitleEnum;
  postId?: number;
  isVisible: boolean;
  submitText?: string;
  initialValues: FormValuesModel;
  onSubmit: (values: FormValuesModel, helpers?: FormikHelpers<FormValuesModel>) => Promise<void>;
  closeCallback: () => void;
}

const PostModalWindow = ({ title, submitText, isVisible, initialValues, onSubmit, closeCallback }: IProps) => {
  return (
    <ModalWindow title={title} isVisible={isVisible} closeCallback={closeCallback}>
      <PostForm submitText={submitText} initialFormValues={initialValues} onSubmit={onSubmit} />
    </ModalWindow>
  );
};

export default PostModalWindow;
