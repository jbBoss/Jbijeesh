// src/components/Img/Img.tsx

import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types"; // Props type definition for the Img component

// Styled image element
// Accepts `width`, `height`, and `disabled` props for styling adjustments
const StyledImg = styled.img<{ disabled?: boolean }>`
  display: block;
  width: ${({ width }) =>
    width || "100%"}; /* Default width: 100% if not provided */
  height: ${({ height }) =>
    height || "auto"}; /* Default height: auto if not provided */
  object-fit: cover; /* Ensures image covers container without distortion */
  border-radius: 8px; /* Rounded corners */

  /* Disabled state styling */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};

  transition: all 0.3s ease; /* Smooth hover or state transitions */

  /* Responsive behavior for smaller screens */
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

/**
 * Img Component
 * Renders an image with optional width, height, and disabled state styling.
 *
 * Props:
 * - src: string           → Image URL
 * - alt: string           → Alt text for accessibility
 * - width?: string        → Optional width (e.g., '200px', '50%')
 * - height?: string       → Optional height (e.g., '150px')
 * - disabled?: boolean    → If true, applies grayscale and reduced opacity
 */
const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return (
    <StyledImg
      data-testid="img" // For testing purposes
      src={src} // Image source
      alt={alt} // Accessibility alt text
      width={width} // Custom width if provided
      height={height} // Custom height if provided
      disabled={disabled} // Disabled styling state
    />
  );
};

export default Img;
