import React from 'react';

// components
import Input from '../../../../Antd/Input';
import Textarea from '../../../../Antd/Textarea';
import FormField from '../../../FormField';

const InnerForm = () => {
  return (
    <>
      <FormField name='title' placeholder='Add title' component={Input} />
      <FormField name='body' placeholder='Fill information' component={Textarea} />
    </>
  );
};

export default InnerForm;
