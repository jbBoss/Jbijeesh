// src/components/Label/Label.tsx
import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ disabled }) => (disabled ? '#888' : '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled = false }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled} data-testid="label">
      {text}
    </StyledLabel>
  );
};

export default Label;
