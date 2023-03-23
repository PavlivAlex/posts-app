import React from 'react';

// components
import { Input as AntdInput } from 'antd';
import styled from 'styled-components';

interface TextareaProps {
  name?: string;
  value?: string;
  disabled?: boolean;
  placeholder: string;

  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea = ({ name, value, disabled, placeholder, onChange }: TextareaProps) => {
  return <StyledTextarea name={name} value={value} disabled={disabled} placeholder={placeholder} onChange={onChange} />;
};

const StyledTextarea = styled(AntdInput.TextArea)`
  height: 80px !important;
  margin: ${({ theme }) => theme.marginS} 0;
  resize: none !important;
  ::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.defaultBorderRadius};
  }
`;

export default Textarea;
