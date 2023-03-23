import React from 'react';

// helpers
import styled from 'styled-components';

// components
import { Input as AntDInput } from 'antd';

type SizeType = 'small' | 'middle' | 'large';

interface InputProps {
  name?: string;
  size?: SizeType;
  value?: string;
  disabled?: boolean;
  placeholder?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ name, size, value, disabled, placeholder, onChange }: InputProps) => {
  return <StyledInput name={name} size={size} value={value} disabled={disabled} placeholder={placeholder} onChange={onChange} />;
};

const StyledInput = styled(AntDInput)`
  margin: ${({ theme }) => theme.marginS} 0;
`;

export default Input;
