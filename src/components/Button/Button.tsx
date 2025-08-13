import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

/**
 * A styled button component that handles visual states like disabled and hover.
 * The generic `<{ disabled?: boolean }>` is passed to styled.button to make TypeScript
 * aware of the `disabled` prop being used for styling.
 */
const StyledButton = styled.button<{ disabled?: boolean }>`
  /* Change background color based on the disabled state */
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  /* Change cursor style to indicate non-interactivity when disabled */
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease; /* Smooth transition for background color changes */

  /* Apply a different background color on hover, but only if the button is not disabled */
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#0056b3")};
  }
`;

/**
 * A reusable UI button component.
 * It renders a button element with styling handled by styled-components.
 *
 * @param {ButtonProps} props - The props for the component.
 * @param {string} props.label - The text to display inside the button.
 * @param {boolean} [props.disabled] - If true, the button will be visually and functionally disabled.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 */
const Button: React.FC<ButtonProps> = ({ label, disabled, onClick }) => (
  <StyledButton
    disabled={disabled}
    onClick={onClick}
    data-testid="button" /* Test ID for easy selection in unit/e2e tests */
  >
    {label}
  </StyledButton>
);

export default Button;
