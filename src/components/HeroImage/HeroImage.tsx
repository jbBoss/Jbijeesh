// src/components/HeroImage/HeroImage.tsx

import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types"; // Props type definition

// Main container for the hero image
// Accepts `imageUrl` for background image and `disabled` for styling changes
const Wrapper = styled.div<{ disabled?: boolean; imageUrl: string }>`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;

  /* If disabled, apply grayscale and lower opacity */
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};

  /* Responsive height adjustment */
  @media (max-width: 768px) {
    height: 200px;
  }
`;

// Semi-transparent overlay for darkening the background image
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

// Content container (text and headings) placed above the overlay
const Content = styled.div`
  position: relative;
  z-index: 2; /* Ensures content appears above overlay */
  color: white;
  padding: 20px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%); /* Vertically centers content */
`;

// Main heading text style
const Heading = styled.h1`
  margin: 0;
  font-size: 2rem;

  /* Smaller font size on mobile */
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

// Subheading text style
const Subheading = styled.p`
  margin: 10px 0 0;
  font-size: 1.1rem;

  /* Smaller font size on mobile */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

/**
 * HeroImage Component
 * Displays a large background image with a dark overlay and centered text.
 *
 * Props:
 * - imageUrl: string       → Background image URL
 * - heading: string        → Main heading text
 * - subheading: string     → Secondary text
 * - disabled?: boolean     → If true, applies a grayscale and disables interaction
 */
const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  heading,
  subheading,
  disabled = false, // Default: enabled
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
