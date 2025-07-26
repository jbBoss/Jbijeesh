// src/components/Table/TableCell.tsx
import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './Table.types';

const Td = styled.td<{ disabled?: boolean }>`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
`;

const TableCell: React.FC<TableCellProps> = ({ content, disabled = false }) => (
  <Td disabled={disabled} data-testid="table-cell">{content}</Td>
);

export default TableCell;
