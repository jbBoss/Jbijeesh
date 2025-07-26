// src/components/Table/TableFooter.tsx
import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './Table.types';

const Tfoot = styled.tfoot`
  background-color: #f0f0f0;
`;

const Td = styled.td<{ disabled?: boolean }>`
  padding: 10px;
  text-align: center;
  color: ${({ disabled }) => (disabled ? '#aaa' : '#333')};
  font-style: italic;
`;

const TableFooter: React.FC<TableFooterProps> = ({ content, disabled = false }) => (
  <Tfoot>
    <tr data-testid="table-footer">
      <Td colSpan={100} disabled={disabled}>{content}</Td>
    </tr>
  </Tfoot>
);

export default TableFooter;
