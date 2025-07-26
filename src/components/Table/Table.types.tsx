// src/components/Table/Table.types.tsx
export interface TableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableRowProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableCellProps {
  content: string;
  disabled?: boolean;
}

export interface TableHeaderProps {
  headers: string[];
  disabled?: boolean;
}

export interface TableFooterProps {
  content: string;
  disabled?: boolean;
}
