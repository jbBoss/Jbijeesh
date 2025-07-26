// Card.tsx
import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#fff')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const Card: React.FC<CardProps> = ({ title, description, imageSrc, disabled }) => (
  <StyledCard disabled={disabled} data-testid="card">
    <img src={imageSrc} alt={title} style={{ width: '100%' }} />
    <h3>{title}</h3>
    <p>{description}</p>
  </StyledCard>
);

export default Card;
