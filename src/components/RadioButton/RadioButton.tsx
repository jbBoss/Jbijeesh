// src/components/RadioButton/RadioButton.tsx

import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types"; // Type definition for props

// Wrapper around the radio input and label text
// Uses `label` so clicking the text also selects the radio button
const Wrapper = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px; /* Space between radio button and text */
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  font-size: 1rem;
`;

// Styled <input type="radio"> element
// `accent-color` changes the checked color in modern browsers
const StyledRadio = styled.input`
  accent-color: #007bff; /* Custom radio button color */
  width: 18px;
  height: 18px;
`;

/**
 * RadioButton Component
 * Renders a single styled radio button with an associated label.
 *
 * Props:
 * - id: string            → Unique identifier for the input
 * - label: string         → Text displayed next to the radio
 * - name: string          → Radio group name (ensures mutual exclusivity)
 * - value: string         → Value of this radio option
 * - checked: boolean      → Whether this radio is selected
 * - onChange: function    → Called when user selects this radio
 * - disabled?: boolean    → Optional; disables the radio and dims styling
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false, // Default: enabled
}) => (
  // The label wrapper handles click-to-select behavior
  <Wrapper htmlFor={id} disabled={disabled} data-testid="radio-wrapper">
    {/* The actual radio input */}
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
    {/* The text label for the radio option */}
    {label}
  </Wrapper>
);

export default RadioButton;
