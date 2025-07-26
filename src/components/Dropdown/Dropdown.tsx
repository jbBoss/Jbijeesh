// src/components/Dropdown/Dropdown.tsx
import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const Select = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'white')};
  color: ${({ disabled }) => (disabled ? '#888' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
  disabled = false,
}) => {
  return (
    <Select
      data-testid="dropdown"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
