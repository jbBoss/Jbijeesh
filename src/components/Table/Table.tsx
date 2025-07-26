// src/components/Table/Table.tsx
import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  border: 1px solid #ccc;
  transition: all 0.3s ease;
`;

const Table: React.FC<TableProps> = ({ children, disabled = false }) => (
  <StyledTable disabled={disabled} data-testid="table">
    {children}
  </StyledTable>
);

export default Table;
