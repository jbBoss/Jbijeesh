// src/components/Table/Table.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './index';

describe('Table Component Suite', () => {

  describe('Table Component', () => {
    test('renders correctly and is visible', () => {
      render(<Table><tbody><tr><td>Content</td></tr></tbody></Table>);
      const tableElement = screen.getByTestId('table');
      expect(tableElement).toBeVisible();
    });

    test('applies disabled styles correctly', () => {
      render(<Table disabled><tbody><tr><td>Content</td></tr></tbody></Table>);
      const tableElement = screen.getByTestId('table');
      // The disabled style for the Table component is opacity, not background-color.
      expect(tableElement).toHaveStyle('opacity: 0.6');
      expect(tableElement).toHaveStyle('cursor: not-allowed');
    });
  });

  describe('TableHeader Component', () => {
    const headers = ['Header 1', 'Header 2'];

    test('renders correctly and is visible', () => {
      render(<Table><TableHeader headers={headers} /></Table>);
      const headerElement = screen.getByTestId('table-header');
      expect(headerElement).toBeVisible();
      expect(screen.getByText('Header 1')).toBeVisible();
    });

    test('applies disabled background color when disabled', () => {
      render(<Table><TableHeader headers={headers} disabled /></Table>);
      const headerCell = screen.getByText('Header 1');
      expect(headerCell).toHaveStyle('background: #e0e0e0');
      expect(headerCell).toHaveStyle('color: #888');
    });
  });

  describe('TableRow Component', () => {
    test('renders correctly and is visible', () => {
      render(<Table><tbody><TableRow><TableCell content="Cell" /></TableRow></tbody></Table>);
      const rowElement = screen.getByTestId('table-row');
      expect(rowElement).toBeVisible();
    });

    test('applies disabled background color when disabled', () => {
      render(<Table><tbody><TableRow disabled><TableCell content="Cell" /></TableRow></tbody></Table>);
      const rowElement = screen.getByTestId('table-row');
      expect(rowElement).toHaveStyle('background-color: #f9f9f9');
      expect(rowElement).toHaveStyle('cursor: not-allowed');
    });
  });

  describe('TableCell Component', () => {
    test('renders correctly and is visible', () => {
      render(<Table><tbody><TableRow><TableCell content="Cell Data" /></TableRow></tbody></Table>);
      const cellElement = screen.getByTestId('table-cell');
      expect(cellElement).toBeVisible();
      expect(screen.getByText('Cell Data')).toBeVisible();
    });

    test('applies disabled styles when disabled', () => {
      render(<Table><tbody><TableRow><TableCell content="Cell Data" disabled /></TableRow></tbody></Table>);
      const cellElement = screen.getByTestId('table-cell');
      // The disabled style for TableCell is text color, not background-color.
      expect(cellElement).toHaveStyle('color: #999');
    });
  });

  describe('TableFooter Component', () => {
    const footerContent = 'End of data';

    test('renders correctly and is visible', () => {
      render(<Table><TableFooter content={footerContent} /></Table>);
      const footerElement = screen.getByTestId('table-footer');
      expect(footerElement).toBeVisible();
      expect(screen.getByText(footerContent)).toBeVisible();
    });

    test('applies disabled styles correctly', () => {
      render(<Table><TableFooter content={footerContent} disabled /></Table>);
      const footerElement = screen.getByTestId('table-footer');
      const footerCell = screen.getByText(footerContent);

      // The Tfoot element has a static background color, so we check the parent.
      // The disabled state changes the text color of the cell inside the footer.
      expect(footerElement.parentElement).toHaveStyle('background-color: #f0f0f0');
      expect(footerCell).toHaveStyle('color: #aaa');
    });
  });

});