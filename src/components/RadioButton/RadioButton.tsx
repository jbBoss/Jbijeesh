// src/components/RadioButton/RadioButton.tsx
import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  font-size: 1rem;
`;

const StyledRadio = styled.input`
  accent-color: #007bff;
  width: 18px;
  height: 18px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
}) => (
  <Wrapper htmlFor={id} disabled={disabled} data-testid="radio-wrapper">
    <StyledRadio
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      data-testid="radio-input"
    />
    {label}
  </Wrapper>
);

export default RadioButton;
