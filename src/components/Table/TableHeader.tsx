// src/components/Table/TableHeader.tsx
import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './Table.types';

const Th = styled.th<{ disabled?: boolean }>`
  background: ${({ disabled }) => (disabled ? '#e0e0e0' : '#f4f4f4')};
  color: ${({ disabled }) => (disabled ? '#888' : '#000')};
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ headers, disabled = false }) => (
  <thead data-testid="table-header">
    <tr>
      {headers.map((header, index) => (
        <Th key={index} disabled={disabled}>
          {header}
        </Th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
