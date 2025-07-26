import React, { useState } from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'array' },
    selected: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};


const Template: StoryFn<DropdownProps> = (args) => {
  const [selected, setSelected] = useState(args.selected);
  return (
    <Dropdown
      {...args}
      selected={selected}
      onChange={(value: string) => setSelected(value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selected: 'Option 1',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selected: 'Option 2',
  disabled: true,
};
