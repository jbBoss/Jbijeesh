// src/components/Text/Text.tsx
import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const getFontSize = (size: 'small' | 'medium' | 'large' = 'medium') => {
  switch (size) {
    case 'small':
      return '0.85rem';
    case 'large':
      return '1.5rem';
    default:
      return '1rem';
  }
};

const StyledText = styled.p<{ size?: 'small' | 'medium' | 'large'; disabled?: boolean }>`
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ disabled }) => (disabled ? '#999' : '#000')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  margin: 0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: ${({ size }) => {
      switch (size) {
        case 'large':
          return '1.2rem';
        case 'small':
          return '0.75rem';
        default:
          return '0.95rem';
      }
    }};
  }
`;

const Text: React.FC<TextProps> = ({ content, size = 'medium', disabled = false }) => {
  return (
    <StyledText data-testid="text" size={size} disabled={disabled}>
      {content}
    </StyledText>
  );
};

export default Text;
