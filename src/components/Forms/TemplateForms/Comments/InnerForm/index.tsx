import React from 'react';

// components
import Textarea from '../../../../Antd/Textarea';
import FormField from '../../../FormField';

const InnerForm = () => {
  return <FormField name='body' placeholder='Your comment...' component={Textarea} />;
};

export default InnerForm;
