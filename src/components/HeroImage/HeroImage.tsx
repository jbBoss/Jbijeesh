// src/components/HeroImage/HeroImage.tsx
import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const Wrapper = styled.div<{ disabled?: boolean; imageUrl: string }>`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  padding: 20px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Subheading = styled.p`
  margin: 10px 0 0;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  heading,
  subheading,
  disabled = false,
}) => (
  <Wrapper data-testid="hero-image" imageUrl={imageUrl} disabled={disabled}>
    <Overlay />
    <Content>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
    </Content>
  </Wrapper>
);

export default HeroImage;
