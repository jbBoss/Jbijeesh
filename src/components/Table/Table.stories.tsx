// src/components/Table/Table.stories.tsx
import React from 'react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './index';
import { StoryFn } from '@storybook/react-webpack5';

export default {
  title: 'Components/Table',
  component: Table,
};

const Template: StoryFn = (args) => (
  <Table disabled={args.disabled}>
    <TableHeader headers={['Name', 'Email', 'Role']} disabled={args.disabled} />
    <tbody>
      <TableRow disabled={args.disabled}>
        <TableCell content="Alice" disabled={args.disabled} />
        <TableCell content="alice@example.com" disabled={args.disabled} />
        <TableCell content="Admin" disabled={args.disabled} />
      </TableRow>
      <TableRow disabled={args.disabled}>
        <TableCell content="Bob" disabled={args.disabled} />
        <TableCell content="bob@example.com" disabled={args.disabled} />
        <TableCell content="Editor" disabled={args.disabled} />
      </TableRow>
    </tbody>
    <TableFooter content="End of Table" disabled={args.disabled} />
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
