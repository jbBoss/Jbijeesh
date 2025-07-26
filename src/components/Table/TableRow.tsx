// src/components/Table/TableRow.tsx
import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './Table.types';

const Tr = styled.tr<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#f9f9f9' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#f9f9f9' : '#f1f1f1')};
  }
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled = false }) => (
  <Tr disabled={disabled} data-testid="table-row">{children}</Tr>
);

export default TableRow;
