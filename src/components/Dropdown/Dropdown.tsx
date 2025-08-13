// src/components/Dropdown/Dropdown.tsx

import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types"; // TypeScript type for props

// Styled <select> element with conditional styles for disabled state
const Select = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "white")};
  color: ${({ disabled }) => (disabled ? "#888" : "black")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

/**
 * Dropdown Component
 * Renders a styled <select> element with given options.
 *
 * Props (from Dropdown.types):
 * - options: string[]   → List of dropdown options
 * - selected: string    → Currently selected option
 * - onChange: function  → Called when selected value changes
 * - disabled?: boolean  → Optional; disables dropdown if true
 */
const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
  disabled = false, // Default: not disabled
}) => {
  return (
    <Select
      data-testid="dropdown" // For testing purposes
      value={selected} // Controlled component value
      onChange={(e) => onChange(e.target.value)} // Pass new value to parent
      disabled={disabled}
    >
      {/* Render each option in the dropdown */}
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
