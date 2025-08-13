// Card.tsx
import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

/**
 * The main styled container for the card.
 * It handles the visual appearance of the card's disabled state.
 * The generic `<{ disabled?: boolean }>` informs TypeScript about the 'disabled' prop.
 */
const StyledCard = styled.div<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Added for better visual depth */
  border-radius: 8px; /* Added for softer corners */

  /* The following styles apply conditionally based on the 'disabled' prop */
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "#fff")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  /* Prevents all mouse interactions like clicks and hovers when disabled */
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

/**
 * A versatile card component for displaying content with an image, title, and description.
 * It can be set to a disabled state, making it non-interactive.
 *
 * @param {CardProps} props - The component's props.
 * @param {string} props.title - The main heading or title for the card.
 * @param {string} props.description - The descriptive text content of the card.
 * @param {string} props.imageSrc - The source URL for the card's image.
 * @param {boolean} [props.disabled] - If true, the card is visually greyed out and non-interactive.
 */
const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  disabled,
}) => (
  <StyledCard disabled={disabled} data-testid="card">
    {/* The alt attribute is crucial for accessibility. */}
    <img
      src={imageSrc}
      alt={title}
      style={{ width: "100%", borderRadius: "4px" }}
    />
    <h3>{title}</h3>
    <p>{description}</p>
  </StyledCard>
);

export default Card;
