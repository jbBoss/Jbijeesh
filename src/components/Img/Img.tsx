// src/components/Img/Img.tsx
import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean }>`
  display: block;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  object-fit: cover;
  border-radius: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return (
    <StyledImg
      data-testid="img"
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
    />
  );
};

export default Img;
